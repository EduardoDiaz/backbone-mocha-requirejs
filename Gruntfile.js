module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
      mocha_phantomjs: {
        all: ['js/test/**/*.html']
      },
      watch: {
        browser: {
            files : ['js/test/**/test/*.js', 'js/test/**/test/**/*.js'],
            tasks : ['mocha_phantomjs']
        }
      }
    });

    grunt.registerTask('test', 'mocha_phantomjs');
};