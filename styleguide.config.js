const path = require('path')
const { createConfig } = require('@webpack-blocks/webpack')
const babel = require('@webpack-blocks/babel')

module.exports = {
  sections: [
    {
      name: 'Components',
      components: 'src/FocusWithin.js',
      sectionDepth: 1
    },
    {
      name: 'Utilities',
      components: 'src/mixins.js',
      sectionDepth: 1
    }
  ],
  webpackConfig: createConfig([babel()]),
  compilerConfig: {
    transforms: {
      // Support for styled-components
      dangerousTaggedTemplateString: true
    }
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js')
    return `import { ${name} } from '@component-driven/react-focus-utils';`
  },
  exampleMode: 'expand',
  usageMode: 'expand',
  showSidebar: true
}
