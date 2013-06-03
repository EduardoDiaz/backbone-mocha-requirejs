module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
      mocha_phantomjs: {
        all: ['test/**/*.html']
      },
      watch: {
        browser: {
            files : ['test/**/test/*.js', 'test/**/test/**/*.js'],
            tasks : ['mocha_phantomjs']
        }
      }
    });

    grunt.registerTask('test', 'mocha_phantomjs');
};