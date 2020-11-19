const path = require("path");
const webpack = require("webpack");

/**
 * entry: tells Webpack where our application starts and where to start bundling files
 * mode: tells Webpack that we're in development mode
 * module: helps define how my exported JS modules are transformed and which ones to include
 *      test and include: conditions to match files against
 * 
 * 1st rule: tells webpack to exclude node_modules/bower_components and to transform .js/.jsx
 *           files using Babel
 * 2nd rule: tells webpack to use css-loader to transform .css files
 * 
 * resolve: allows us to specify which extensions Webpack will resolve - this allows us
 *          to import modules without needing to add their extensions
 * 
 * output: tells webpack where to put our bundled code
 * publicPath: which directory the bundle should go in. 
 *          Also tells webpack-dev-server where to serve files from. 
 *      
 */
module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { 
                    presets: ["@babel/env"]
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { 
        extensions: ["*", ".js", ".jsx"],
        alias: {
            '@Components': path.resolve(__dirname, 'src/components/'),
            '@Utilities': path.resolve(__dirname, 'src/utilities/')
        }
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};