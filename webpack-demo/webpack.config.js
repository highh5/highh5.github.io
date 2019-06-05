// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
module.exports = {
  entry:path.join(__dirname,'./src/main.js'),
  output: {
    path: path.join(__dirname,'./dist'),
    filename: "bundle.js"
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.less$/,
        use:[
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template:path.join(__dirname,'./src/index.html'),
      filename: "index.html"
    })
  ],
  resolve: {
    extensions: ['.js','.vue'],
    alias: {
      'vue$':'vue/dist/vue.common.js'
    }
  }
}
