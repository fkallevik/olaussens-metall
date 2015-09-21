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
    watch: {
      styles: {
        files: ['styles/*.scss', 'styles/partials/*.scss', 'styles/*.css'], // which files to watch
        tasks: ['sass:development'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass:development','watch']);
};