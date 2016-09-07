module.exports = function(grunt) {
    require('time-grunt')(grunt);

    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.initConfig({
        useminPrepare: {
            dist: 'src/index.html'
        },
        usemin: {
            dist: 'dist/index.html'
        },
        babel: {
            options: {
                sourceMap: true
            },
            dev: {
                expand: true,
                cwd: 'src/es6',
                src: '*.js',
                dest: 'src/js',
            }
        },
        watch: {
            less: {
                files: ['src/less/**/*.less'],
                tasks: ['less:dev', 'autoprefixer:dev']
            },
            es6: {
                files: ['src/es6/**/*.js'],
                tasks: ['babel:dev']
            },
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },
            dev: {
                expand: true,
                cwd: 'src/css',
                src: '*',
                dest: 'src/css',
            }
        },
        less: {
            dev: {
                expand: true,
                cwd: 'src/less',
                src: '*',
                dest: 'src/css',
                rename: function (dest, src) {          // The `dest` and `src` values can be passed into the function
                    return dest + '/' + src.replace('less','css'); // The `src` is being renamed; the `dest` remains the same
                }
            }
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

    grunt.registerTask('lessprefix', ['less:dev', 'autoprefixer:dev']);

    grunt.registerTask('dist', [
        'lessprefix',
        'babel:dev',
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