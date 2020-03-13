import babel from 'rollup-plugin-babel' // eslint-disable-line
import resolve from '@rollup/plugin-node-resolve'

const env = process.env.NODE_ENV

const config = {
  input: 'src/index.js',
  output: {},
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
  external: ['react', 'prop-types']
}

config.output.format = env

export default config
