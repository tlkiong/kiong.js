// ================ Dependencies for dev & prod ==================
const { src, dest, series } = require('gulp');
const depUglify = require('gulp-uglify');
const depRename = require('gulp-rename');


// ================ Dependencies for dev =========================

// ================ Dependencies for prod ========================
const depStripDebug = require('gulp-strip-debug');

// ================ End Dependencies =============================


// ===============================================================

  exports.prod = prod_tasks();

// ================ Dev Tasks (in order: top to bottom) ==========

// ================ Prod Tasks (in order: top to bottom) =========

  function prod_tasks() {
    return series( 
      process_index_to_prod
    );
  }

  function process_index_to_prod() {
    console.log(' ----- Start: ', get_current_function_name());

    return src('index.js')
      .pipe(depStripDebug())
      .pipe(depUglify())
      .pipe(depRename({ extname: '.min.js' }))
      .pipe(dest('.'));
  }

// ================ Misc Tasks / Functions  ======================

  function get_current_function_name() {
    // The following CAN'T work with strict mode due to security issues
    return get_current_function_name.caller.name;
  }