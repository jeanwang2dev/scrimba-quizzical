const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let mode = process.env.NODE_ENV === "production" ? "production": "development";

module.exports = {
  mode: mode,
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  module: {
    // exclude node_modules
    rules: [
      {
        // images inline depends on size
        // Now webpack will automatically choose between resource and inline by following a default condition: a file with size less than 8kb will be treated as a inline module type and resource module type otherwise.
        test: /\.(jpe?g|png|svg)$/i,
        type: "asset",
        generator: {
            publicPath: 'img/',
            outputPath: 'img/',
          },                
      },      
      {
        // css
        test: /\.css$/i,
        include: [
            path.resolve(__dirname, 'src'),
        ],
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: { publicPath: "img/" },
            },
            'css-loader',
            'postcss-loader',
        ],

      },
      { // babel
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'main.css',
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
      }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
    open: false,
    hot: true,
  },
    // pass all js files through Babel
    resolve: {
      extensions: [".*", ".js", ".jsx"],
    },
};