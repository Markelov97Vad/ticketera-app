import webpack from 'webpack';
import buildDevServer from './buildDevServer';
import buildLoaders from './buildLoaders';
import buildPlugins from './buildPlugins';
import buildResolvers from './buildResolvers';
import { BuildOptions } from './types/types';

export function buildWebpack(option: BuildOptions) : webpack.Configuration {
  const { mode, paths } = option;
  const isDev = mode === 'development'
  const isProd = mode === 'production'
  console.log('IsDevelop', isDev);

  return {
    mode: mode, // режим разработчика
    entry: paths.entry, // точка входа
    output: {
      path: paths.output, // точка выхода
      filename: "[name].[contenthash].js", // при изменении контента, всегда будет актуальная сборка
      // publicPath: "", //  свойство для обновления путей внутри CSS- и HTML-файлов.
      clean: true, // очищать папку при новой сборке
      assetModuleFilename: 'assets/[hash][ext][query]', // складывать asset в images
    },
    devtool: isDev ? 'eval' : undefined, // помогает отслеживать ошибки
    devServer: isDev ? buildDevServer(option) : undefined,
    module: {
      rules: buildLoaders(option)
    },
    optimization: {
      runtimeChunk: 'single' // fix hmr bug
    },
    resolve: buildResolvers(option),
    plugins: buildPlugins(option),
  };
}
