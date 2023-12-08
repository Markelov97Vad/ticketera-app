import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin"; // обновление сборки
import { BuildMode, PlatformType } from "config/build/types/types";
import buildWebpack from "config/build/buildWebpack";



interface Env {
  mode?: BuildMode;
  port?: number;
  analyzer?: boolean;
  platform?: PlatformType;
  typeChecking?: boolean
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

  return config
};
