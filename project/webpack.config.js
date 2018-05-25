const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: ['webpack/hot/poll?1000', './src/main.hmr.ts'],
  watch: true,
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: "development",
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias:{         // import bar from "bar"
			// "bar":path.resolve(__dirname,"app/bar.js")
			"@con":path.resolve(__dirname,"src/server/controller"),
			"@comp":path.resolve(__dirname,"app/componments")
		}
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
  },
};
