const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const autoprefixer = require("autoprefixer");

const maxFileSize = 2 * 1024 * 1024;
const devEnv = process.env.NODE_ENV === "development";

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
      components: path.resolve(__dirname, "./src/components"),
      containers: path.resolve(__dirname, "./src/containers"),
      routes: path.resolve(__dirname, "./src/routes"),
      lib: path.resolve(__dirname, "./src/lib"),
      i18n: path.resolve(__dirname, "./src/i18n"),
      styles: path.resolve(__dirname, "./src/styles"),
      icons: path.resolve(__dirname, "./src/assets/icons"),
    },
  },
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: "/",
  },
  performance: {
    maxEntrypointSize: maxFileSize,
    maxAssetSize: maxFileSize,
  },
  module: {
    rules: [
      {
        test: /\.(ttf|woff|eot)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
      {
        test: /\.(svg|png)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /.*\.scss$/,
        exclude: [path.resolve(__dirname, "./src/styles")],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: devEnv
                  ? "[path][name]__[local]"
                  : "[hash:base64]",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /.*\.scss$/,
        include: [path.resolve(__dirname, "./src/styles")],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: false,
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "public", to: "" }],
    }),
    new webpack.DefinePlugin({
      "process.env.DSN": JSON.stringify(process.env.DSN),
      "process.env.APP_BUILD": JSON.stringify(process.env.APP_BUILD),
      "process.env.ENV_NAME": JSON.stringify(process.env.ENV_NAME),
      "process.env.ANALYTICS_ID": JSON.stringify(process.env.ANALYTICS_ID),
      "process.env.GTM_ID": JSON.stringify(process.env.GTM_ID),
      "process.env.RECAPTCHA_KEY": JSON.stringify(process.env.RECAPTCHA_KEY),
    }),
    autoprefixer,
  ],
};
