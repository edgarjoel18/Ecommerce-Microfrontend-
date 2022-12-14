const { merge } = require('webpack-merge'); // used to merge 2 webpack config files
const HmtlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpackCommonConfig = require("./webpack.common");
const packageJson = require('../package.json');

const devConfig = {
    mode: "development",
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [ 
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            },
            shared: packageJson.dependencies
        }),
        new HmtlWebpackPlugin({
            template: './public/index.html',
        }),
    ],

}

module.exports = merge(webpackCommonConfig, devConfig);







