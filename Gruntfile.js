module.exports = function(grunt) {

  grunt.initConfig({
    eslint: {
      target: ['src/*.js']
    },
    watch: {
      files: ['<%= eslint.target %>'],
      tasks: ['eslint']
    }
  });

  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['eslint']);

};
