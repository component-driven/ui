const path = require("path")
const readPkgUp = require("read-pkg-up")

const packages = ["react-focus-within", "with-selector", "mixins"]

const file = (filepath) => path.join(__dirname, filepath)

module.exports = {
  sections: [
    {
      name: "Introduction",
      content: "./README.md"
    },
    {
      name: "Components",
      components: `packages/components/**/[A-Z]*.tsx`
    },
    {
      name: "Packages",
      sections: packages.map((pkg) => ({
        name: pkg,
        components: `packages/${pkg}/**/[A-Z]*.js`
      })),
      sectionDepth: 1
    },
    {
      name: "Utilities",
      components: "packages/**/mixins.js"
      // sectionDepth: 1
    }
  ],
  styleguideComponents: {
    Wrapper: file(".styleguidist/StyleguideProvider.tsx")
  },
  require: [file(".styleguidist/setup.js")],
  propsParser: require("react-docgen-typescript").withCustomConfig(
    file("packages/components/tsconfig.json"),
    {
      propFilter(prop) {
        if (prop.parent) {
          return (
            !prop.parent.fileName.includes("node_modules") ||
            prop.parent.fileName.includes("@types/styled-system")
          )
        }
        return true
      },
      componentNameResolver: (exp, source) =>
        exp.getName() === "StyledComponentClass" &&
        require("react-docgen-typescript").getDefaultExportForFile(source)
    }
  ).parse,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(js|tsx?)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  },
  getExampleFilename(componentPath) {
    const componentName = path.basename(componentPath, path.extname(componentPath))
    if (componentPath.includes("components")) {
      return path.join(path.dirname(componentPath), `${componentName}.md`)
    }
    return path.join(path.dirname(componentPath), "..", "Readme.md")
  },
  getComponentPathLine(componentPath) {
    const componentName = path.basename(componentPath, path.extname(componentPath))
    const { packageJson } = readPkgUp.sync({ cwd: path.join(__dirname, componentPath) })
    const { name } = packageJson
    if (name === "@component-driven/components") {
      // Named exports
      return `import { ${componentName} } from ${name}`
    }
    // Default export
    return `import ${componentName} from ${name}`
  },
  exampleMode: "expand",
  usageMode: "collapse",
  showSidebar: true,
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  ribbon: {
    // Link to open on the ribbon click (required)
    url: "https://github.com/component-driven/ui",
    // Text to show on the ribbon (optional)
    text: "Fork me on GitHub"
  }
}
