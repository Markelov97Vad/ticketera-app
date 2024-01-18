import path from 'path';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'; // для типизации dev server
import { BuildOptions } from './types/types';
var r = 2;
function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    static: path.resolve(__dirname, './build'), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: options.port ?? 3000, // порт, чтобы открывать сайт по адресу localhost:8080
    open: false, // сайт откроется автоматически
    hot: true,
    historyApiFallback: true, // разрешить навигацию по сайту
  };
}

export default buildDevServer;
