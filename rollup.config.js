import babel from "rollup-plugin-babel"; // eslint-disable-line

const env = process.env.NODE_ENV

const config = {
  input: 'index.js',
  output: {},
  plugins: [
    babel({
      exclude: 'node_modules/**', // only transpile our source code
      plugins: ['external-helpers']
    })
  ],
  external: ['react', 'prop-types']
}

config.output.format = env

export default config
