const path = require("path");
const { createConfig, babel } = require("webpack-blocks"); // eslint-disable-line

module.exports = {
  components: "src/**/[A-Z]*.js",
  webpackConfig: createConfig([babel()]),
  compilerConfig: {
    transforms: {
      // Support for styled-components
      dangerousTaggedTemplateString: true
    }
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, ".js");
    return `import ${name} from 'react-focus-within';`;
  },
  exampleMode: "expand",
  usageMode: "expand",
  showSidebar: false
};
