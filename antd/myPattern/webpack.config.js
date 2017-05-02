// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展
var config = {
  entry: './index.js',

  output: {
    path:'./',
    filename: 'index.js',
  },

  devServer: {
    inline: true,
    port: 7777
  },

  module: {
    loaders: [ {
      test: /.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',

      query: {
        presets: ['es2016', 'react']
      }
    },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }]
  }

}
module.exports = config;
// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展

//module.exports = function(webpackConfig) {
//  webpackConfig.babel.plugins.push('transform-runtime');
//  webpackConfig.babel.plugins.push(['import', {
//    libraryName: 'antd',
//    style: 'css',
//  }]);
//
//  return webpackConfig;
//};