require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');
const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const CompressionPlugin = require('compression-webpack-plugin');



const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

const filterOrderConflictWarnings = new FilterWarningsPlugin({
    exclude:  /mini-css-extract-plugin[^]*Conflicting order between:/,
});


if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => {
    }
}
const themeVariables = lessToJS(
    fs.readFileSync(path.resolve(__dirname, './static/assets/styles.less'), 'utf8')
);


module.exports = withLess(withCSS({
    webpack(config) {
        config.plugins = config.plugins || [];
        config.plugins.push(filterOrderConflictWarnings);
        config.plugins.push(new CompressionPlugin({
            test: /\.(js|css|less|svg|png)$/i
        }));
        config.module.rules.push({
            test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    publicPath: './',
                    outputPath: 'static/',
                    name: '[name].[ext]'
                }
            }
        });

        config.plugins = [
            ...config.plugins,

            // Read the .env file
            new Dotenv({
                path: path.join(__dirname, '.env'),
                systemvars: true
            })
        ];

        Object.assign(config, {
            node: config.isServer ? undefined : {fs: 'empty'},
        });

        return config
    },
    lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables
    },
    onDemandEntries: {
        maxInactiveAge: 25 * 1000,
        pagesBufferLength: 5,
    },

}));