module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      development: {
        options: {
          loadPath: ["assets"]
        },
        files: {
          "assets/theme.css": "styles/theme.scss"
        }
      },
    },
    coffee: {
      compile: {
        options: {
          bare: true,
          join: true
        },
        files: {
          'assets/common.js': [
            'js/common.coffee'
          ]
        }
      }
    },
    uglify: {
      olaussensmetall: {
        files: {
          'assets/common.min.js' : [
            'assets/common.js'
          ]
        }
      }
    },
    watch: {
      styles: {
        files: ['styles/*.scss', 'styles/partials/*.scss', 'styles/*.css'], // which files to watch
        tasks: ['sass:development'],
        options: {
          nospawn: true
        }
      },
      coffee: {
        files: [ 'js/*.coffee'],
        tasks: [ 'coffee:compile'],
        options: {
          debounceDelay: 250,
          nospawn: false
        }
      },
      uglify: {
        files: [ 'assets/common.js'],
        tasks: [ 'uglify:olaussensmetall'],
        options: {
          debounceDelay: 500,
          nospawn: false
        }
      }

    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['sass:development','coffee:compile','uglify:olaussensmetall','watch']);
};