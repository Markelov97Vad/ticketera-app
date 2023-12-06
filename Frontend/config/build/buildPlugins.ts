import HtmlWebpackPlugin from "html-webpack-plugin";// подключите плагин автоматической загрузки js в HTML
import MiniCssExtractPlugin from "mini-css-extract-plugin"; // сжимает отдельно CSS
import webpack, { Configuration, DefinePlugin } from "webpack";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

function buildPlugins({mode, paths , analyzer, platform} : BuildOptions): Configuration['plugins'] {
  const isDevelopment = mode === 'development'
  const isProduction = mode === 'production'

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ // Подключать сгенерированный JS-код в HTML автоматически.
      // template: path.resolve(__dirname, 'public', 'index.html'),
      template: paths.html
    }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
    })
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
  if(analyzer) {
    plugins.push(new BundleAnalyzerPlugin()) // 
  }

  return plugins;
}

export default buildPlugins;