require.config({
    baseUrl: '../../js',
    urlArgs: 'bust=' + (new Date()).getTime(),
    paths: {
        'mocha'     : 'test/lib/mocha',
        'chai'      : 'test/lib/chai',
        'sinon'     : 'test/lib/sinon',
        'jquery'    : 'src/lib/jquery',
        'underscore': 'src/lib/underscore',
        'backbone'  : 'src/lib/backbone'
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
    'use strict';

    mocha.setup('bdd');

    require(['test/app/test'], function () {
        (window.mochaPhantomJS || mocha).run();
    });
});