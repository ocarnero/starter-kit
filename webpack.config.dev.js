import path from 'path';

module.exports = {
	mode: 'development',
  entry: './client/index.js',
  output: {
		path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js',    
	},
	devtool: 'inline-source-map',
	target: "web",
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