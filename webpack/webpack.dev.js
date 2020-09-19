const path = require("path");
const { merge } = require("webpack-merge");

const webpackBase = require("./webpack.base");

module.exports = merge(webpackBase, {
    mode: "development",
    devtool: "source-map",
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    devServer: {
        index: "index.html",
        open: true,
        openPage: `http://localhost:7777`,
        port: 7777,
        historyApiFallback: true,
    }
});
