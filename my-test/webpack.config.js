const webpack = require('webpack');
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// OccurenceOrderPlugin :为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
// UglifyJsPlugin：压缩JS代码；
// ExtractTextPlugin：分离CSS和JS文件
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
	devtool: "eval-source-map",
	// null  生产环境
// source-map	在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的source map，但是它会减慢打包速度；
// cheap-module-source-map	在一个单独的文件中生成一个不带列映射的map，不带列映射提高了打包速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号），会对调试造成不便；
// eval-source-map	使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。在开发阶段这是一个非常好的选项，在生产阶段则一定不要启用这个选项；
// cheap-module-eval-source-map	这是在打包文件时最快的生成source map的方法，生成的Source Map 会和打包后的JavaScript文件同行显示
	mode: 'development',
	optimization: {
		minimize: true   //压缩jscss文件
	},
	entry: __dirname + "/app/app.js",
	output: {
		publicPath:"/",
		path: __dirname + "/public",
		filename: "[name]-[hash].js"   //会导致改变文件内容后重新打包时，文件名不同而内容越来越多
	},
	externals: {
		// jquery: 'jQuery'   //外部依赖模块
	  },
	resolve:{
		alias:{         // import bar from "bar"
			// "bar":path.resolve(__dirname,"app/bar.js")
			"@view":path.resolve(__dirname,"app/view"),
			"@comp":path.resolve(__dirname,"app/componments"),
			"@redux":path.resolve(__dirname,"app/redux"),
			"@less":path.resolve(__dirname,"app/assets/less"),
		}
	},
	module: {
		rules: [
			{
				test:/(\.jsx|\.js)$/,
				use:{
					loader:'babel-loader?cacheDirectory=true',
					options: {
                        presets: [
                            "env", "react", 'stage-1'
						],
						"plugins": [
							[
							  "import",
							  {
								"libraryName": "antd",
								"libraryDirectory": "es",
								"style": "css" 
							  }],[
							  "transform-runtime",
								{
								"helpers": false,
								"polyfill": false,
								"regenerator": true,
								"moduleName": "babel-runtime"
								}
							]
						],
						"sourceMaps": true
                    }
				},
				exclude: /node_modules/
			},
			{
                test: /\.css$/,
                loader: 'style-loader!css-loader?importLoaders=1',
            },
			{
				test: /\.less$/,
				use:ExtractTextPlugin.extract({
					use:[{
						loader:'css-loader'
					},{
							loader:'less-loader',
							options: {
								modules: true, // 指定启用css modules
								localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
							}
						}],
					fallback:'style-loader'
				}) 
			},
			{
	　　　　　　test: /\.(png|jpg)$/,
	　　　　　　loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
	　　　　}
		]
	},
	devServer: {
	    contentBase: "./public",//本地服务器所加载的页面所在的目录
	    // colors: true,//终端中输出结果为彩色
	    historyApiFallback: true,//不跳转
	    inline: true//实时刷新
	},
	plugins: [
		new webpack.BannerPlugin('版权所有，翻版必究'),   //打包后js开头的注释
		new HtmlWebpackPlugin({
            template: "index.html"//new 一个这个插件的实例，并传入相关的参数
		}),
		new ExtractTextPlugin("[name]-[hash].css"),
		// // new webpack.optimize.UglifyJsPlugin(),
		// new CleanWebpackPlugin('build/*.*', {
		// 	root: __dirname,
		// 	verbose: true,
		// 	dry: false
		// }),
		new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
}





















