const path = require('path')
const findUp = require('find-up')
const { createConfig } = require('@webpack-blocks/webpack')
const babel = require('@webpack-blocks/babel')

module.exports = {
  sections: [
    {
      name: 'Introduction',
      content: 'Readme.md'
    },
    {
      sectionDepth: 1,
      name: 'react-design-tokens',
      sections: [
        {
          name: 'About',
          content: 'packages/react-design-tokens/Readme.md'
        },
        {
          name: 'Components',
          components: 'packages/react-design-tokens/src/components/[A-Z]*.jsx'
        }
      ]
    },
    {
      name: 'react-focus-within',
      components: 'packages/react-focus-within/**/[A-Z]*.js',
      sectionDepth: 0
    },
    {
      name: 'with-selector',
      components: 'packages/with-selector/**/[A-Z]*.js',
      sectionDepth: 0
    },
    {
      name: 'Utilities',
      components: 'packages/**/mixins.js',
      sectionDepth: 0
    }
  ],
  webpackConfig: createConfig([babel()]),
  getExampleFilename(componentPath) {
    // Try to locate ${componentName}.md in the same directory
    // and if not found fallback to Readme.md
    const componentName = path.basename(componentPath, path.extname(componentPath))
    const examplePath = findUp.sync(`${componentName}.md`, { cwd: componentPath })
    if (examplePath) {
      return examplePath
    }
    const readmePath = findUp.sync('Readme.md', { cwd: componentPath })
    console.log(readmePath)
    if (readmePath) {
      return readmePath
    }
    console.error(`Could not find example file for ${componentPath}`)
  },
  getComponentPathLine(componentPath) {
    const componentName = path.basename(componentPath, path.extname(componentPath))
    const pkgPath = findUp.sync('package.json', { cwd: componentPath })
    if (!pkgPath) {
      console.error(`Could not find \`package.json\` for ${componentName}`)
    }
    const { name } = require(pkgPath)
    return `import { ${componentName} } from ${name}`
  },
  pagePerSection: true,
  exampleMode: 'expand',
  usageMode: 'expand',
  showSidebar: true,
  ribbon: {
    // Link to open on the ribbon click (required)
    url: 'https://github.com/component-driven/ui',
    // Text to show on the ribbon (optional)
    text: 'Fork me on GitHub'
  }
}
