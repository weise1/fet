const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "index.html",
            template: path.resolve(__dirname, "src/pages/index.html"),
            filename: "index.html",
        }),
        new HtmlWebpackPlugin({
            title: "news.html",
            template: path.resolve(__dirname, "src/pages/news.html"),
            filename: "news.html",
        }),
        new HtmlWebpackPlugin({
            title: "photo.html",
            template: path.resolve(__dirname, "src/pages/photo.html"),
            filename: "photo.html",
        }),
        new HtmlWebpackPlugin({
            title: "rozklad.html",
            template: path.resolve(__dirname, "src/pages/rozklad.html"),
            filename: "rozklad.html",
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 3000,
        open: true,
        hot: true,
    },
};
