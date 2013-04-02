// ./nodejuice ~/git/kimbo.js/web/
module.exports = function (grunt) {

  grunt.initConfig({
    outputDir: '../',

    copy: {
      img: {
        files: [{ src: 'img/**', dest: '../' }]
      }
    },

    stylus: {
      compile: {
        files: {
          '<%= outputDir %>/css/css.min.css': ['styl/*.styl']
        }
      }
    },

    cssmin: {
      compress: {
        files: {
          '<%= outputDir %>/css/css.min.css': ['styl/tuktuk.icon.css', '<%= outputDir %>/css/css.min.css']
        }
      }
    },

    jade: {
      compile: {
        files: [{
          expand: true,
          cwd: 'jade',
          src: '*.jade',
          ext: '.html',
          dest: '<%= outputDir %>'
        }]
      }
    },

    coffee: {
      compile: {
        files: {
          '<%= outputDir %>/js/scripts.js': ['coffee/*.coffee']
        }
      }
    },

    uglify: {
      target: {
        files: {
          '<%= outputDir %>/js/scripts.js': ['<%= outputDir %>/js/scripts.js']
        }
      }
    },

    watch: {
      stylus: {
        files: ['styl/*.styl'],
        tasks: ['stylus', 'cssmin']
      },

      jade: {
        files: ['jade/**/*.jade'],
        tasks: ['jade']
      },

      coffee: {
        files: ['coffee/*.coffee'],
        tasks: ['coffee', 'uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['copy', 'stylus', 'cssmin', 'jade', 'coffee', 'uglify']);

};
