import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from 'react-refresh-typescript';
import babelLoader from "./babel/babelLoader";

function buildLoaders(options: BuildOptions ): ModuleOptions['rules'] {
  const {mode, typeChecking} = options;
  const isDev = mode === 'development'
  const isProd = mode === 'production'

  // const cssLoadersMod = {
  //   loader: "css-loader",
  //   options: {
  //     modules: { // опции для названий классов стилей
  //       // localIdentName: isDev ? '[name]__[local]' : '[hash:base64:8]'
  //       // localIdentName: '[name]__[local]'
  //       sourceMap: true,
  //     }
  //   }
  // }
  const cssLoadersMod = {
    loader: "css-loader",
    options: {
      // sourceMap: true,
      // modules: { // опции для названий классов стилей
      //   // localIdentName: isDev ? '[name]__[local]' : '[hash:base64:8]',
      //   // localIdentName: '[name]__[local]'
      // }
      // modules: undefined as undefined
      modules: {
        auto: /\.module\.\w+$/i,
      }
    }
  }

  const sassLoadersMod = {
    loader: 'sass-loader',
  }

  const globalStyleMod = {
    resourceQuery: /global/, 
    use: ['style-loader', 'css-loader', 'sass-loader']
  }
  
  const styleLoader = {
    test: /\.s[ac]ss$/i,
    // test: /\.s[ac]ss$/i,
    // exclude: /node_modules/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      cssLoadersMod,
    //  'css-loader',
      // 'sass-loader' // для обработки CSS и SCSS
      sassLoadersMod
    ],
  }
  // // ts-loader умеет работать с jsx
  // const tsLoader = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader', // лоадер для обработки ts
  //   exclude: /node_modules/, // то что не нужно обрабатывать
  // }
  // ts-loader умеет работать с jsx
  const tsLoader = {
      exclude: /node_modules/, // то что не нужно обрабатывать
      test: /\.tsx?$/,
      use: [
        {
          loader: 'ts-loader', // лоадер для обработки ts
          options: {
            transpileOnly: !typeChecking, // во время сборки идет проверка типов
            getCustomTransformers: () => ({
              before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
            }),
          }
        }
      ]
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

  // const babelLoader =  {
  //   test: /\.tsx?$/,
  //   // при обработке этих файлов нужно использовать babel-loader
  //   use: {
  //     loader: 'babel-loader',
  //     options: {
  //       presets: [
  //         '@babel/preset-env',
  //         "@babel/preset-typescript",
  //         ["@babel/preset-react", {
  //           runtime: isDev ? 'automatic' : 'classic'
  //         }]
  //       ]
  //     }
  //   },
  //   // исключает папку node_modules, файлы в ней обрабатывать не нужно
  //   exclude: '/node_modules/'
  // }

  // const sourceMapLoader = {
  //   test: /\.tsx?$/,
  //   enforce: "pre",
  //   use: ["source-map-loader"],
  // }

  return [
    assetLoader,
    styleLoader,
    tsLoader,
    // babelLoader,
    // babelLoader(options),
    globalStyleMod,
    svgLoader,
    // sourceMapLoader
  ]
}

export default buildLoaders;