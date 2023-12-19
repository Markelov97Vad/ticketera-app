import path from "path";
import webpack from 'webpack';
import { CleanWebpackPlugin } from "clean-webpack-plugin"; // обновление сборки
import { BuildMode, PlatformType, buildWebpack } from "@packages/build-config";
// import buildWebpack from "config/build/buildWebpack";
import packageJson from './package.json';

interface Env {
  mode?: BuildMode;
  port?: number;
  analyzer?: boolean;
  platform?: PlatformType;
  typeChecking?: boolean;
  STORE_REMOTE_URL?: string;
  ADMIN_REMOTE_URL?: string;
}

export default (env: Env) => {
  const paths = {
    entry: path.resolve(__dirname, "src", "index.tsx"), // точка входа
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src')
  }

  const config = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    analyzer: env.analyzer,
    platform: env.platform ?? 'desktop',
    typeChecking: env.typeChecking
  });

  const STORE_REMOTE_URl = env.STORE_REMOTE_URL ?? 'http://localhost:3001';
  const ADMIN_REMOTE_URL = env.ADMIN_REMOTE_URL ?? 'http://localhost:3002';

  /**
   * ModuleFederationPlugin позволяет сборке предоставлять или 
   * использовать модули с другими независимыми сборками во время выполнения.
   */
  config.plugins.push(new webpack.container.ModuleFederationPlugin({
    name: 'host',
    filename: 'remoteEntry.js',

    remotes: { // пути до сервисов
      store: `store@${STORE_REMOTE_URl}/remoteEntry.js`,
      admin: `admin@${ADMIN_REMOTE_URL}/remoteEntry.js`
    },
    shared: {
      ...packageJson.dependencies,
      "react": {
        eager: true,
        requiredVersion: packageJson.dependencies['react']
      },
      'react-router-dom': {
        eager: true, // подгрузить библиотеку сразу
        requiredVersion: packageJson.dependencies['react-router-dom']
      },
      'react-dom': {
        eager: true, // подгрузить библиотеку сразу
        requiredVersion: packageJson.dependencies['react-dom']
      },
    }
  }))

  return config
};
