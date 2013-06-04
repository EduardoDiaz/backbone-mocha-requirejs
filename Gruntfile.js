'use strict';

module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'js/src/{,*/}*.js',
                '!js/src/lib/*',
                'js/test/app/{,*/}*.js',
                '!js/test/lib/*'
            ]
        },
        mocha_phantomjs: {
            all: ['js/test/**/*.html']
        },
        watch: {
            all: {
                files : ['js/test/**/*.js', 'js/src/{,*/}*.js'],
                tasks : ['jshint:all', 'mocha_phantomjs']
            }
        }
    });

    grunt.registerTask('test', ['jshint:all', 'mocha_phantomjs']);
};