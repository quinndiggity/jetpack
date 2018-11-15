module.exports = (config, options) => {
  if (!options.production && options.hot) {
    const webpack = require('webpack')
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
    Object.keys(config.entry).forEach(e => {
      config.entry[e] = [
        require.resolve('webpack-hot-middleware/client') + '?path=/assets/__webpack_hmr&noInfo=true&reload=true'
      ].concat(config.entry[e])
    })
  }
}