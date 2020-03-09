const path = require('path')
const { createConfig } = require('@webpack-blocks/webpack')
const babel = require('@webpack-blocks/babel')

module.exports = {
  components: 'src/**/[A-Z]*.js',
  webpackConfig: createConfig([babel()]),
  compilerConfig: {
    transforms: {
      // Support for styled-components
      dangerousTaggedTemplateString: true
    }
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js')
    return `import ${name} from '@component-driven/react-focus-utils';`
  },
  exampleMode: 'expand',
  usageMode: 'expand',
  showSidebar: false
}
