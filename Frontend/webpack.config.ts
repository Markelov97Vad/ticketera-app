import path from "path";
import Webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin"; // подключите плагин автоматической загрузки js в HTML
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { CleanWebpackPlugin } from "clean-webpack-plugin"; // обновление сборки
import type { Configuration as DevServerConfiguration } from "webpack-dev-server"; // для типизации dev server
import buildWebpack from "./config/build/buildWebpack";

type Mode = 'production' | 'development' // union type

interface Env {
  mode: Mode;
  port: number
}

export default (env: Env) => {
  const isDevelopment = env.mode === 'development'
  console.log( 'IsDevelop',isDevelopment);
  const isProduction = env.mode === 'production'
  const paths = {
    entry: path.resolve(__dirname, "src", "index.tsx"), // точка входа
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }

  const config = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths
  });

  return config
};
