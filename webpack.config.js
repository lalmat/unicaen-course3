var nodeRoot = "./node_modules";
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app:"./src/main.js",
    vendor: ['vue']
  },
  output: {
    path: __dirname+"/dist/",
    filename: "main.min.js"
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader")
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      { test: /\.tpl$/, loader: "html" },
      { test: /\.png/, loader: 'url?limit=100000&minetype=image/png' },
      { test: /\.jpg/, loader: 'file' },
      { test: /\.gif/, loader: 'url?limit=100000&minetype=image/gif' }
    ],
    noParse: [
      nodeRoot+"/"
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
    new ExtractTextPlugin("./style.css", {allChunks: true})
  ]
};
