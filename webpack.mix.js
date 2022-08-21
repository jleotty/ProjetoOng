let mix = require('laravel-mix');
let minifier = require('minifier');

/*  npm run production
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('assets/scss/style.scss', 'assets/css').options({
    processCssUrls: false,
    outputStyle: 'nested'
}).sourceMaps();

mix.then(() => {
    minifier.minify('assets/css/style.css')
});

mix.js('assets/scss/script.js', 'assets/js');
