const path = require('path')
const { createConfig } = require('@webpack-blocks/webpack')
const babel = require('@webpack-blocks/babel')

module.exports = {
  sections: [
    {
      name: 'Components',
      components: 'packages/**/[A-Z]*.js',
      sectionDepth: 1
    },
    {
      name: 'Utilities',
      components: 'packages/**/mixins.js',
      sectionDepth: 1
    }
  ],

  webpackConfig: createConfig([babel()]),
  getExampleFilename(componentPath) {
    return path.join(path.dirname(componentPath), '..', 'Readme.md')
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js')
    const packageJSON = require(path.join(
      __dirname,
      path.dirname(componentPath),
      '..',
      'package.json'
    ))
    return `import ${name} from ${packageJSON.name}`
  },
  exampleMode: 'expand',
  usageMode: 'expand',
  showSidebar: true
}
