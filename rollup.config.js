import babel from "rollup-plugin-babel"; // eslint-disable-line

const sharedConfig = {
  plugins: [
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
  external: ['react', 'prop-types']
}

export default [
  Object.assign({}, sharedConfig, {
    input: 'index.js',
    output: {
      file: 'build/bundle.js',
      format: 'cjs'
    }
  }),
  Object.assign({}, sharedConfig, {
    input: 'index.js',
    output: {
      file: 'build/bundle.m.js',
      format: 'esm'
    }
  })
]
