const Path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  
  output: {
    filename: 'js/[name].bundle.js',
    path: Path.resolve(__dirname, 'dist')
  },
  
  // 開発中はsourcemapを出力
  devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
  
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      }
    ]
  },
  
  plugins: [
    new VueLoaderPlugin()
  ],
  
  resolve: {
    extensions: ['.js', '.vue', '.styl'],
    modules: [Path.resolve(__dirname, "src"), 'node_modules'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    }
  },
  
  devServer: {
    contentBase: './dist'
  }
}