const { EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const baseUrl = isProd ? 'https://somewebsite.com' : 'http://localhost:3000';
const apiUrl = `${baseUrl}/api`;

const devOptions = {
  mode: 'development',
  devtool: 'inline-source-map',
};

const prodOptions = {
  mode: 'production',
};
const options = isProd ? prodOptions : devOptions;

module.exports = {
  ...options,
  entry: {
    bundle: './src/index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{ loader: 'ts-loader' }],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          esModule: false,
          limit: 10000000000,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@api': path.resolve(__dirname, 'src', 'api'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@hooks': path.resolve(__dirname, 'src', 'hooks'),
      '@images': path.resolve(__dirname, 'src', 'images'),
      '@router': path.resolve(__dirname, 'src', 'router'),
      '@state': path.resolve(__dirname, 'src', 'state'),
      '@themes': path.resolve(__dirname, 'src', 'themes'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
    },
  },
  plugins: [
    new EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV || 'development',
      API_URL: apiUrl,
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].js',
    globalObject: 'self',
  },
  devServer: {
    hot: true,
    liveReload: true,
    publicPath: 'http://localhost:3000',
    inline: true,
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
  },
};
