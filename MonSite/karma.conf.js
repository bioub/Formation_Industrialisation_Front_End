// Karma configuration
// Generated on Wed Sep 07 2016 14:58:55 GMT+0200 (Paris, Madrid (heure d’été))

module.exports = function(config) {
  config.set({

    plugins: [
      'karma-systemjs',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
    ],

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['systemjs', 'jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'test/CalculetteSpec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,


    systemjs: {

      // SystemJS configuration specifically for tests, added after your config file.
      // Good for adding test libraries and mock modules
      config: {
        serveFiles: [
          'test/CalculetteSpec.js'
        ],
        files: [
          'test/CalculetteSpec.js'
        ],
        transpiler: 'none',
        paths: {
          'systemjs': 'src/bower_components/system.js/dist/system.src.js',
          'jasmine': 'node_modules/jasmine-core/lib/jasmine-core.js'
        }
      }
    }
  })
}
