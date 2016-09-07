module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.initConfig({
        useminPrepare: {
            dist: 'src/index.html'
        },
        usemin: {
            dist: 'dist/index.html'
        },
        uglify: {
            dist: {
                expand: true,
                cwd: 'src',
                src: 'js/**/*.js',
                dest: 'dist/',
            }
        },
        clean: {
            predist: ['dist/*'],
            postdist: ['.tmp']
        },
        copy: {
            distHtml: {
                expand: true,
                cwd: 'src',
                src: 'index.html',
                dest: 'dist/',
            },
            distFont: {
                expand: true,
                cwd: 'src/bower_components/bootstrap',
                src: 'fonts/*',
                dest: 'dist/',
            },
        },
    });

    grunt.registerTask('dist', [
        'clean:predist',
        'useminPrepare:dist',
        'concat:generated',
        'uglify:generated',
        'uglify:dist',
        'cssmin:generated',
        'copy:distHtml',
        'copy:distFont',
        'usemin:dist',
        'clean:postdist',
    ]);
};