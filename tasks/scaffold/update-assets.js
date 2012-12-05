'use strict';

exports.description = "Update the project assets with the latest version";
exports.notes = "Update the project assets with the latest version";

exports.template = function(grunt, scaffold, done) {

  var eris = grunt.eris;
  var erisUtils = grunt.erisUtils;

  var util = grunt.util || grunt.utils;
  var _ = util._;

  scaffold.process({}, [
    {
      name: "answer",
      message: "This option will REPLACE files in the assets folder.  Are you sure?)".red,
      "default": "Y/n"
    }
  ], function(err, props) {
      if (/y/i.test(props.answer)) {

        grunt.log.write('Installing repos...');
        var repos = eris.currentTemplate.repos;
        erisUtils.installRepos(repos, {}, function() {
          grunt.log.ok();

          grunt.log.write('Copying assets...');
          scaffold.copyFiles('node_modules/client-assets/*', 'assets');
          grunt.log.ok();
        });
      }
      else {
        grunt.log.writeln('');
        grunt.log.writeln("Update aborted".yellow);
      }

      done();
  });

};
