import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

function buildLoaders(options: BuildOptions ): ModuleOptions['rules'] {
  const isDev = options.mode === 'development'
  const isProd = options.mode === 'production'

  const cssLoadersMod = {
    loader: "css-loader",
    options: {
      modules: { // опции для названий классов стилей
        localIdentName: isDev ? '[name]__[local]' : '[hash:base64:8]'
      }
    }
  }
  
  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      cssLoadersMod,
      "sass-loader" // для обработки CSS и SCSS
    ],
  }
  // ts-loader умеет работать с jsx
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader', // лоадер для обработки ts
    exclude: /node_modules/, // то что не нужно обрабатывать
  }

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif|woff(2)?|eot|ttf|otf)$/,
    type: "asset/resource",// позволяет переносить исходные файлы в конечную сборку в том же формате.
  }

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      { 
        loader: '@svgr/webpack', 
        options: { 
          icon: true, // позволяет менять размер SVG
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors', // позволяет с помощью стилей менять цвет svg
                params: {
                  currentColor: true
                }
              }
            ]
          }
        } 
      }
    ],
  }

  return [
    assetLoader,
    styleLoader,
    tsLoader,
    svgLoader
  ]
}

export default buildLoaders;