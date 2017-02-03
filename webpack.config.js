/**
 * @author: @AngularClass
 */
var TypedocWebpackPlugin = require('typedoc-webpack-plugin');

// Look in ./config folder for webpack.dev.js
switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./config/webpack.prod')({ env: 'production' });
    break;
  case 'test':
  case 'testing':
    module.exports = require('./config/webpack.test')({ env: 'test' });
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./config/webpack.dev')({ env: 'development' });
}

module.exports = {
  entry: './app.ts',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
  },
  module: {
    loaders: [ // loaders will work with webpack 1 or 2; but will be renamed "rules" in future
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}

