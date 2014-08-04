/**
 * This file/module contains all configuration for the build process.
 */

var join = require('path').join,
    bowerrc = JSON.parse(require('fs').readFileSync('./.bowerrc', {encoding: 'utf8'})),
    bower = require(bowerrc.json.replace(/^\.?\/?/, './')),
    pkg = require('./package.json'),

    /**
     * The `buildDir` folder is where our projects are compiled during
     * development and the `compileDir` folder is where our app resides once it's
     * completely built.
     */
    buildDir = 'build',
    compileDir = 'compile',
    vendorDir = bowerrc.directory,
    templatesDir = 'templates',
    indexFile = 'index.html',
    jsDir = 'js',
    cssDir = 'css',
    assetsDir = 'assets';

module.exports = {
    buildDir: buildDir,
    compileDir: compileDir,

    // Relative paths to core files and folders for input and output
    indexFile: indexFile,
    jsDir: jsDir,
    cssDir: cssDir,
    assetsDir: assetsDir,
    vendorDir: vendorDir,
    templatesDir: templatesDir,

    // allows settings reuse from package.json and bower.json
    bower: bower,
    pkg: pkg,

    /**
     * Settings for the server task
     * When run, this task will start a connect server on
     * your build directory, great for livereload
     */
    server: {
        port: 8081, // 0 = random port
        host: null, // null/falsy means listen to all, but will auto open localhost

        // Enable disable default auto open
        // false: run with --open to open
        // true: run with --no-open to not open, recommended if port is 0
        openByDefault: false,

        // set to false to prevent request logging
        // set to any non-`true` value to configure the logger
        log: false,

        // Live Reload server port
        lrPort: 35729
    },

    taskOptions: {
        csso: false, // set to true to prevent structural modifications
        jshint: {
            eqeqeq: true,
            camelcase: true,
            freeze: true,
            immed: true,
            latedef: true,
            newcap: true,
            undef: true,
            unused: 'vars',
            //strict: true,
            browser: true,
            globals: {
                angular: false,
                console: false,
                bootbox: false,
                '_': false,
                RESTQuery: false,
                '$': false,
                soundManager: false,
                File: false,
                SparkMD5: false,
                qq: false
            }
        },
        less: {},
        recess: {
            strictPropertyOrder: false,
            noOverqualifying: false,
            noUniversalSelectors: false
        },
        uglify: {
            mangle: false
        }
    },

    /**
     * This is a collection of file patterns that refer to our app code (the
     * stuff in `src/`). These file paths are used in the configuration of
     * build tasks. `js` is all project javascript, less tests. `ctpl` contains
     * our reusable components' (`src/common`) template HTML files, while
     * `atpl` contains the same, but for our app's code. `html` is just our
     * main HTML file, `less` is our main stylesheet, and `unit` contains our
     * app's unit tests.
     */
    appFiles: {
        js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
        jsunit: [ join(buildDir, '/js/**/*.js'), '!'+join(buildDir, '/js/vendor/**/*.js'), 'src/**/*.spec.js' ],

        tpl: [ 'src/app/**/*.tpl.html', 'src/common/**/*.tpl.html' ],

        html: join('src', indexFile),
        less: 'src/less/main.less',
        assets: join('src', assetsDir, '**/*.*')
    },

    /**
     * Similar to above, except this is the pattern of files to watch
     * for live build and reloading.
     */
    watchFiles: {
        js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
        //jsunit: [ 'src/**/*.spec.js' ], // watch is handled by the karma plugin!

        tpl: [ 'src/app/**/*.tpl.html', 'src/common/**/*.tpl.html' ],

        html: [ join(buildDir, '**/*'), '!'+join(buildDir,indexFile), join('src',indexFile) ],
        less: [ 'src/**/*.less' ],
        assets: join('src',assetsDir,'**/*.*')
    },

    /**
     * This is a collection of files used during testing only.
     */
    testFiles: {
        config: 'karma.conf.js',
        js: [
            'vendor/angular-mocks/angular-mocks.js'
        ]
    },

    vendorFiles: require('./vendorFiles.config.js')
};
