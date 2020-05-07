import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
	mode: 'production',
  entry: './client/index.js',
  output: {
		path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',    
	},
	devtool: 'source-map',
	target: "web",
	plugins: [
		new webpack.LoaderOptionsPlugin({
		minimize: true
		}),
		new HtmlWebpackPlugin({
			template: 'client/index.html',
			inject: true
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
        test: /\.css$/,
				use: [{ 
					loader: 'style-loader'
				}, {
					loader: 'css-loader',
					options: {
						modules: true
					}
				}]
			},
			{
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
		],
  },
};