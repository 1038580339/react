var webpack=require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports={
  entry:{
    bundle:'./app/main.jsx',
    vendor:[
      'react',
      'react-dom',
      'react-router'
    ]
  },
  output: {
   path: path.resolve(__dirname, './dist'),
   publicPath: '/',
   filename: "build.js"
 },

  module:{
    loaders:[{//转码js
      test:/\.js$/,
      exclude:/node_modules/,
      loaders:'babel-loader',
      query:{
        presets:['es2015','react']
      }
    },
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['react', 'es2015']
      }
    },
    { //转码css
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
    {
        test: /\.(png|jpg|jpeg|gif)$/,
        loaders: [
          'url-loader?limit=10240&name=img/[hash:8].[ext]',
          'img-loader?minimize&optimizationLevel=5&progressive=true'
        ]
      }
  ]
  },
  devServer: {
    port: 9090,
    disableHostCheck: true
  },
  plugins: [
  new ExtractTextPlugin('./[name].min.css'),
   new webpack.optimize.AggressiveMergingPlugin(),
   new HtmlWebpackPlugin({
   template: path.resolve(__dirname, "./index.html")
}),
new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['$super', '$', 'exports', 'require', 'module', '_']
            },
            compress: {
                warnings: false
            },
            output: {
                comments: false,
            }
        }),
        // 拆分插件
       new webpack.optimize.CommonsChunkPlugin({
           name:'vendor', // 上面入口定义的节点组
           filename:'vendor.build.js' //最后生成的文件名
       }),
 ]
}
