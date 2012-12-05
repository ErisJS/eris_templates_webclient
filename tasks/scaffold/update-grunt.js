'use strict';

exports.description = "Replace the current Gruntfile.js file";
exports.notes = "Replaces the current Gruntfile.js file";

exports.template = function(grunt, scaffold, done) {
  
  var eris = grunt.eris;
  var erisUtils = grunt.erisUtils;

  var util = grunt.util || grunt.utils;
  var _ = util._;

  scaffold.process({}, [
    {
      name: "answer",
      message: "This option will REPLACE the grunt file in the project.  Are you sure?)".red,
      "default": "Y/n"
    }
  ], function(err, props) {
			if (/y/i.test(props.answer)) {
        grunt.log.writeln('Installing repos...');
        var repos = eris.currentTemplate.repos;
        erisUtils.installRepos(repos, {}, function() {
          grunt.log.ok();

          grunt.log.writeln('Copying Gruntfile...');
          scaffold.copyFiles('node_modules/client-boilerplate/Gruntfile.js','Gruntfile.js');
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
