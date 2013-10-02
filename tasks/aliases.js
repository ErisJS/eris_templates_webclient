'use strict';

module.exports = function(grunt) {
  // Aliases for doc generation
  grunt.registerTask("doc", "Generate documentation", "yuidoc");
  // Aliases for test
  grunt.registerTask("test", "Run test suites in a headless PhantomJS", "jasmine");
};
