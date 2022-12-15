const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpackCommonConfig = require("./webpack.common");
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;
// some change
const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash.js]',
        publicpath: '/container/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/remoteEntry.js`,
                auth: `auth@${domain}/auth/latest/remoteEntry.js`,
            },
            shared: packageJson.dependencies
        })
    ]
}


module.exports = merge(webpackCommonConfig, prodConfig);






