import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack, { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

function buildPlugins({mode, paths} : BuildOptions): Configuration['plugins'] {
  const isDevelopment = mode === 'development'
  const isProduction = mode === 'production'

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ // Подключать сгенерированный JS-код в HTML автоматически.
      // template: path.resolve(__dirname, 'public', 'index.html'),
      template: paths.html
    }),
    // new CleanWebpackPlugin(),
  ]

  if(isDevelopment) {
    plugins.push(new webpack.ProgressPlugin())
  }

  if (isProduction) {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css', // выход бандла
      chunkFilename: 'css/[name].[contenthash:8].css'
    }))
  }

  return plugins;
}

export default buildPlugins;