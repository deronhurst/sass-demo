module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'dart-sass': {
      target: {
        options: {
          outputStyle: 'expanded', 
          sourceMap: true
        },
        files: {
          'dist/css/sass-demo.css': 'src/sass/sass-demo.scss'
        }
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')(), // add vendor prefixes
          //require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'dist/css/*.css'
      }
    },
    watch: {
      css: {
        files: ['src/sass/**/*.scss'],
        tasks: ['dart-sass', 'postcss']
      },
    },
  });

  grunt.loadNpmTasks('grunt-dart-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('w',['watch']);
}