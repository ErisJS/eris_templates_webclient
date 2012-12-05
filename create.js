/*
 * grunt-create for web-client template
 */

'use strict';

// Basic template description.
exports.description = 'Create a basic Five9 web-client application.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual create template.
exports.template = function(grunt, create, done) {

  create.copyFiles('node_modules/client-boilerplate/*');
  create.copyFiles('node_modules/client-assets/*', 'assets');

  done();
};
