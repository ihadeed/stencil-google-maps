exports.config = {
    bundles: [
        { components: ['google-maps', 'hybrid-google-maps', 'cordova-google-maps'] }
    ]
};

exports.devServer = {
    root: 'www',
    watchGlob: '**/**'
};
