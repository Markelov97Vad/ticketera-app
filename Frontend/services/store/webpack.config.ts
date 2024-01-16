import path from 'path';
import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin'; // обновление сборки
// import { BuildMode, PlatformType } from "config/build/types/types";
// import buildWebpack from "config/build/buildWebpack";
import {
	BuildMode,
	PlatformType,
	buildWebpack,
} from '../../packages/build-config/src';
import packageJson from './package.json';

interface Env {
	mode?: BuildMode;
	port?: number;
	analyzer?: boolean;
	platform?: PlatformType;
	typeChecking?: boolean;
}

export default (env: Env) => {
	const paths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'), // точка входа
		output: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		public: path.resolve(__dirname, 'public'),
		src: path.resolve(__dirname, 'src'),
	};

	const config = buildWebpack({
		port: env.port ?? 3001,
		mode: env.mode ?? 'development',
		paths,
		analyzer: env.analyzer,
		platform: env.platform ?? 'desktop',
		typeChecking: env.typeChecking,
	});

	config.plugins?.push(
		new webpack.container.ModuleFederationPlugin({
			name: 'store', // название микрофронтенда
			filename: 'remoteEntry.js', // файл которы будет удаленно подключаться в host контейнер
			exposes: {
				'./Router': './src/router/Router.tsx', // что будет представленно host контейнеру (выходной файл)
				// './Router': './src/bootstrap.tsx' // что будет представленно host контейнеру (выходной файл)
			},
			shared: {
				// какие библиотеки нужно отдавать
				...packageJson.dependencies,
				...packageJson.devDependencies,
				react: {
					eager: true, // подгрузить библиотеку сразу
					requiredVersion: packageJson.dependencies['react'],
				},
				'react-router-dom': {
					eager: true, // подгрузить библиотеку сразу
					requiredVersion: packageJson.dependencies['react-router-dom'],
				},
				'react-dom': {
					eager: true, // подгрузить библиотеку сразу
					requiredVersion: packageJson.dependencies['react-dom'],
				},
			},
		}),
	);

	return config;
};
