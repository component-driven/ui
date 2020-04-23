module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['ie >= 11']
        },
        exclude: ['transform-async-to-generator', 'transform-regenerator'],
        modules: false,
        loose: true
      }
    ],
    '@babel/react'
  ],
  plugins: ['@babel/plugin-proposal-class-properties']
}
