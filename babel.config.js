// This file is used by Babel to configure the transpilation process.

// See https://babeljs.io/docs/en/config-files for more information.

module.exports = function (api) {
  api.cache(true);
  return {
    plugins: ['macros'],

  }
}
