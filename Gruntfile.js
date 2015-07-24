module.exports = function(grunt) {

  // Project configuration.
   grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    watch: {
      css: {
        files: [
          'sass/*.sass',
          'scss/*.scss'
        ],
        tasks: ['compass']
      },
     

      js: {
        files: [
          'js/*.js',
          'Gruntfile.js'
        ],
        tasks: ['jshint']
      }
    },
    

    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          outputStyle: 'compressed'
        }
      }
    },

    

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'js/*.js']
    },


    browserSync: {
  files: {
    src : [
      'css/*.css',
      'img/*',
      'js/*.js',
      '*.html',
      '*.php'
    ],
  	},
  		options: {
    	watchTask: true // bcause we using watch

  	}
	}
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Register the default tasks.
  grunt.registerTask('default',['browserSync', 'watch' , 'jshint' , 'compass']);

  };