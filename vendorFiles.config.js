/**
 * This is the same as `app_files`, except it contains patterns that
 * reference vendor code (`vendor/`) that we need to place into the build
 * process somewhere. While the `app_files` property ensures all
 * standardized files are collected for compilation, it is the user's job
 * to ensure non-standardized (i.e. vendor-related) files are handled
 * appropriately in `vendorFiles.js`.
 *
 * The `vendorFiles.js` property holds files to be automatically
 * concatenated and minified with our project source files.
 *
 * The `vendorFiles.assets` property holds any assets to be copied along
 * with our app's assets. This structure is flattened, so it is not
 * recommended that you use wildcards.
 */
module.exports = {
    js: [
        'vendor/jquery/dist/jquery.js',
        'vendor/lodash/dist/lodash.js',
        'vendor/angular/angular.js',
        'vendor/angular-sanitize/angular-sanitize.js',
        'vendor/angular-cookies/angular-cookies.js',
        'vendor/angular-bootstrap/ui-bootstrap.js',
        'vendor/angular-bootstrap/ui-bootstrap-tpls.js',
        'vendor/angular-ui-router/release/angular-ui-router.js',
        'vendor/bootstrap/dist/js/bootstrap.js'
    ],
    css: [
    ],
    assets: [
        'vendor/bootstrap/dist/fonts/**'
    ]
};