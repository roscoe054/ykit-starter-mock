module.exports = {
    plugins: ['mock'],
    config: {
        exports: [
            './scripts/index.js',
            './styles/index.css'
        ],
        modifyWebpackConfig: function(baseConfig) {
            // edit ykit's Webpack configs
            return baseConfig;
        }
    },
    hooks: {},
    commands: []
};
