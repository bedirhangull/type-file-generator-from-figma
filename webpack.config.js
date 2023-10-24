const InlineChunkHtmlPlugin = require("react-dev-utils/InlineChunkHtmlPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CreateFileWebpack = require("create-file-webpack");
const { figmaPlugin } = require("./package.json");
const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => ({
  mode: argv.mode === "production" ? "production" : "development",

  devtool: argv.mode === "production" ? false : "inline-source-map",

  entry: {
    ui: "./src/index.tsx", 
    code: "./src/code.ts",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(svg|png|gif)/,
        type: "asset/inline",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      '@views': path.resolve(__dirname, 'src/views/index.ts'),
    },
  },

  output: {
    publicPath: "",
    assetModuleFilename: "[name][ext]",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"), 
  },

  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new webpack.DefinePlugin({
      global: {},
    }),
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./src/ui.html",
      filename: "ui.html",
      cache: false,
      chunks: ["ui"],
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/ui/]),
    new CreateFileWebpack({
      path: path.resolve(__dirname, "dist"),
      fileName: "manifest.json",
      content: JSON.stringify(figmaPlugin),
    }),
  ],
});
