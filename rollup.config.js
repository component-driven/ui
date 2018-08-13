import babel from "rollup-plugin-babel"; // eslint-disable-line

export default {
  input: "src/index.js",
  output: {
    file: "bundle.js",
    format: "cjs"
  },
  plugins: [
    babel({
      exclude: "node_modules/**" // only transpile our source code
    })
  ],
  external: ["react", "prop-types"]
};
