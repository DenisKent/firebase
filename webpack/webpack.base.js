const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".css"],
        alias: {
            app: path.resolve(__dirname, "../app"),
        }
    },
    entry: "./app/core/index.js",
    output: {
        filename: `bundle.js`,
        path: path.resolve(__dirname, `../public`),
        publicPath: "/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./app/core/index.html"
        })
    ],
};
