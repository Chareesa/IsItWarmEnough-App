'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    clean: {
      dev: {
        src: ['build/']
      }
    },

    copy: {
      dev: {
        cwd: 'app/',
        src: ['**/*.html', 'css/**/*.css'],
        expand: true,
        dest: 'build/'
      }
    },

    browserify: {
      dev: {
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js',
        options: {
          transform: ['debowerify']
        }
      }
    },

    test: {
      src: ['test/client/**/*test.js'],
      dest: 'test/test_bundle.js',
      options: {
        transform: ['debowerify']
      }
    },

    jshint: {
      options: {
        node: true
      },
      src: ['server.js']
    },

    simplemocha: {
      src: ['test/*.js']
    },

    jscs: {
      src: ['server.js'],
      options: {
        config: '.jscsrc'
      }
    }
  });

  grunt.registerTask('build:dev', ['clean:dev', 'browserify:dev', 'copy:dev', 'jshint', 'simplemocha', 'jscs']);
};
