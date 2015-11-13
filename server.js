var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(8080, 'localhost', function(err, result){
  if(err){
    return console.log(err);
  }

  console.log('Listening on localhost:8080')
});
