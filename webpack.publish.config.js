const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const isProduction = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isProduction ? 'production' : 'development',
  devServer: {
    contentBase: './dist',
  },
  devtool: isProduction ? 'source-map' : false,
  entry: {
    app: './src/publish.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].bundle.js',
    library: 'ProductZoomer',
    libraryTarget: 'umd'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.vue'],
    plugins: []
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: [require('precss')(), require('autoprefixer')()]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
            [
              '@babel/plugin-proposal-class-properties',
              {
                loose: true
              }
            ]
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          }
        ]
      },
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          }
        ],
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/assets/index.html',
      title: 'Vue Product Zoomer',
      appMountId: 'app'
    }),
    new CleanWebpackPlugin(),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: isProduction ? false : true,
      parallel: true
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}
