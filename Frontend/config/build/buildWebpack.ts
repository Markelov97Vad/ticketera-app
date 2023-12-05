import path from 'path';
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server"; // для типизации dev server
import buildDevServer from './buildDevServer';
import buildLoaders from './buildLoaders';
import buildPlugins from './buildPlugins';
import buildResolvers from './buildResolvers';
import { BuildOptions } from './types/types';

function buildWebpack(option: BuildOptions) : webpack.Configuration {
  const { mode, port, paths } = option;
  const isDevelopment = mode === 'development'
  console.log( 'IsDevelop',isDevelopment);
  const isProduction = mode === 'production'

  return {
    mode: mode, // режим разработчика
    entry: paths.entry, // точка входа
    output: {
      path: paths.output, // точка выхода
      filename: "[name].[contenthash].js", // при изменении контента, всегда будет актуальная сборка
      // publicPath: "", //  свойство для обновления путей внутри CSS- и HTML-файлов.
      clean: true, // очищать папку при новой сборке
    },
    devtool: isDevelopment ? 'inline-source-map' : false, // помогает отслеживать ошибки
    devServer: isDevelopment ? buildDevServer(option) : undefined,
    module: {
      rules: buildLoaders(option)
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(option),
  };
}

export default buildWebpack