require.config({
    baseUrl: '../../js',
    paths: {
        'mocha': 'test/lib/mocha',
        'chai' : 'test/lib/chai',
        'sinon': 'test/lib/sinon'
    },
    shim: {
        'mocha': {
            exports: 'mocha'
        },
        'sinon': {
            exports: 'sinon'
        }
    }
});

require(['require', 'mocha'], function (require, mocha) {
    mocha.setup('bdd');

    require(['test/test/test'], function (test) {
        (window.mochaPhantomJS || mocha).run();
    });
});