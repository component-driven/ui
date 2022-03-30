const path = require("path")
const findUp = require("find-up")

const packages = [
  "components",
  "react-design-tokens",
  "react-focus-within",
  "with-selector",
  "mixins"
]

const file = (filepath) => path.join(__dirname, filepath)

module.exports = {
  sections: [
    {
      name: "Introduction",
      content: "./Readme.md"
    },
    {
      name: "Packages",
      sections: packages.map((pkg) => ({
        name: pkg,
        components: `packages/${pkg}/**/[A-Z]*.{js,ts,jsx,tsx}`
      })),
      sectionDepth: 1
    }
  ],
  styleguideComponents: {
    Wrapper: file(".styleguidist/StyleguideProvider.tsx")
  },
  require: [file(".styleguidist/setup.js")],
  propsParser: require("react-docgen-typescript").withCustomConfig(file("tsconfig.json"), {
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
  }).parse,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(jsx?|tsx?)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  },
  getExampleFilename(componentPath) {
    // Try to locate ${componentName}.md in the same directory
    // and if not found fallback to Readme.md
    const componentName = path.basename(componentPath, path.extname(componentPath))
    const examplePath = findUp.sync(`${componentName}.md`, { cwd: componentPath })
    if (examplePath) {
      return examplePath
    }
    const readmePath = findUp.sync("Readme.md", { cwd: componentPath })
    console.log(readmePath)
    if (readmePath) {
      return readmePath
    }
    console.error(`Could not find example file for ${componentPath}`)
  },
  getComponentPathLine(componentPath) {
    const componentName = path.basename(componentPath, path.extname(componentPath))
    const pkgPath = findUp.sync("package.json", { cwd: componentPath })
    if (!pkgPath) {
      console.error(`Could not find \`package.json\` for ${componentName}`)
      return ""
    }
    const { name } = require(pkgPath)
    return `import { ${componentName} } from ${name}`
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
