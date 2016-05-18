module.exports = {
  entry: [
    './src/index.js' //設定jsx檔案 = index.js STEP1
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js' //轉換輸出檔 = bundle.js STEP2
  },
  devServer: {
    color:              true,
    historyApiFallback: true,
    contentBase:        './',
    inline:             true,
    progress:           true,
    port:               3000 //設定server port
  },
  module: {
    loaders: [{
      test: /\.js$/, //  /\.js$/,代表針對副檔名＝js*的檔案處理
      exclude: /node_modules/, //設定exclude: /node_modules/代表不會對node_modules目錄裡的檔案處理
      loader: 'babel', //設定jsx轉換的loader = babel
      query: {
        presets: ['es2015', 'react'] //設定babel翻譯的pre-loader，包含es2015與react
      }
    }]
  }
};
