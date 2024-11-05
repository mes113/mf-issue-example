const moduleFederation = require('@module-federation/enhanced/webpack');
const { ModuleFederationPlugin } = moduleFederation;
console.log(ModuleFederationPlugin);
module.exports = {
    webpack: {
        devServer: {
            port: 3000,
        },
        output: {
            publicPath: 'auto',
        },
        plugins: [
            new ModuleFederationPlugin({
                name: 'host',
                filename: 'remoteEntry.js',
                exposes: {
                },
                shared: {
                },
                options: {
                    enableLogging: false,
                    debug: false
                }
            }),
        ],
    },
};