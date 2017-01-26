"use strict"
let path = require("path")

const BUILD_DIR = path.resolve(__dirname, "public")
const APP_DIR = path.resolve(__dirname, "app")

const PORT = process.env.PORT || "2020"

let config = {
    entry: [
        "webpack-dev-server/client?http://0.0.0.0:" + PORT,
        "webpack/hot/only-dev-server",
        APP_DIR + "/app.jsx"
    ],
    output: {
        path: BUILD_DIR,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loaders: ["react-hot", "babel"]
            },
            {
                test: /\.css?/,
                loaders: [
                    "style-loader",
                    "css-loader?modules=true?&sourceMap&localIdentName=[name]__[local]__[hash:base64:5]",
                    "postcss-loader"
                ]
            }
        ]
    }
}

module.exports = config
