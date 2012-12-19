'use strict';

module.exports = function(grunt) {
  // Aliases for doc generation
  grunt.registerTask("doc", "Generate documentation", "yuidoc");
  // Aliases for scaffolding
  grunt.registerTask("new-model", "Add a new model to the application", "scaffold:model");
  grunt.registerTask("new-widget", "Add a new widget to the application", "scaffold:widget");
  // Aliases for test
  grunt.registerTask("test", "Run test suites in a headless PhantomJS", "jasmine");
  // Aliases for updates
  grunt.registerTask("update-assets", "Update the project assets with the latest version", "scaffold:update-assets");
  grunt.registerTask("update-grunt", "Update the project Gruntfile with the latest version", "scaffold:update-grunt");
};
