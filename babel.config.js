module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["ie >= 11"]
        },
        exclude: ["transform-async-to-generator", "transform-regenerator"],
        modules: false,
        loose: true
      }
    ],
    "@babel/react",
    "@babel/preset-typescript"
  ],
  plugins: ["@babel/plugin-proposal-class-properties"]
}
