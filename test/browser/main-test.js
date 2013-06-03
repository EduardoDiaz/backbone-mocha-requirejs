require.config({
    paths: {
        'mocha': 'lib/mocha',
        'chai' : 'lib/chai',
        'sinon': 'lib/sinon'
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

    require(['test/test'], function (test) {
        (window.mochaPhantomJS || mocha).run();
    });
});