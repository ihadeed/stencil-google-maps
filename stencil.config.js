exports.config = {
    bundles: [
        { components: ['google-maps'] },
        { components: ['hybrid-google-maps'] },
        { components: ['cordova-google-maps'] },
    ]
};

exports.devServer = {
    root: 'www',
    watchGlob: '**/**'
};
