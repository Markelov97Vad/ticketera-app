import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";// подключите плагин автоматической загрузки js в HTML
import { BuildOptions } from "./types/types";
import webpack, { Configuration, DefinePlugin } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import MiniCssExtractPlugin from "mini-css-extract-plugin"; // сжимает отдельно CSS
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from 'copy-webpack-plugin';
import dotenv from 'dotenv';

function buildPlugins({mode, paths , analyzer, platform, typeChecking} : BuildOptions): Configuration['plugins'] {
  const isDevelopment = mode === 'development'
  const isProduction = mode === 'production'
  const env = dotenv.config().parsed;

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ // Подключать сгенерированный JS-код в HTML автоматически.
      // template: path.resolve(__dirname, 'public', 'index.html'),
      template: paths.html,
      favicon: path.resolve(paths.public, 'favicon.ico'),
      publicPath: '/' //доступ по названию роута в браузере
    }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
      "process.env.API_KEY_MAP": JSON.stringify(env.API_KEY_MAP),
    })
    // new CleanWebpackPlugin(),
  ]

  if(isDevelopment) {
    plugins.push(new webpack.ProgressPlugin());
    plugins.push(new ForkTsCheckerWebpackPlugin()); /** Выносит проверку типов в отдельный процесс: не нагружая сборку */
    plugins.push(new ReactRefreshWebpackPlugin()); // отменяет горячую перезагрузку браузера при изменении кода
  }

  if (isProduction) {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css', // выход бандла
      chunkFilename: 'css/[name].[contenthash:8].css'
    }));
    plugins.push(new CopyPlugin({
      patterns: [
        {
          from: path.resolve(paths.public, 'data'),
          to: path.resolve(paths.output, 'data')
        },
        {
          from: path.resolve(paths.public, 'fonts'),
          to: path.resolve(paths.output, 'fonts')
        }
      ]
    }))
  }
  if(analyzer) {
    plugins.push(new BundleAnalyzerPlugin()); // 
  }

  return plugins;
}

export default buildPlugins;