import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

function buildLoaders(options: BuildOptions ): ModuleOptions['rules'] {
  const isDev = options.mode === 'development'
  const isProd = options.mode === 'production'
  console.log(isDev);
  console.log(isProd);
  
  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      "css-loader",
      "sass-loader" // для обработки CSS и SCSS
    ],
  }
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader', // лоадер для обработки ts
    exclude: /node_modules/, // то что не нужно обрабатывать
  }
  return [
    // rules — это массив правил
    // ts-loader умеет работать с jsx
    styleLoader,
    tsLoader,
    // добавили правило для обработки файлов
    // {
    //   // регулярное выражение, которое ищет все файлы с такими расширениями
    //   test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
    //   type: "asset/resource",// позволяет переносить исходные файлы в конечную сборку в том же формате.
    // },
  ]
}

export default buildLoaders;