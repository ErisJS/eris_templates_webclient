'use strict';

exports.description = "Add a new application model";
exports.notes = "Generates a new model";

exports.template = function(grunt, scaffold, done) {
  var util = grunt.util || grunt.utils;
  var _ = util._;

  scaffold.process({}, [
    {
      name: "name",
      message: "Model Name",
      validator: /^[\w\-\.]+$/
    }
  ], function(err, props) {
    // files to copy and process
    var files = scaffold.filesToCopy(props);

    // ensure the name is lowercase
    props.name = props.name.toLowerCase();

    // set the module name to be the title case
    props.module_name = props.name[0].toUpperCase() + props.name.slice(1);

    // copy and process files
    scaffold.copyAndProcess(files, props, {});

    // complete
    done();
  });

};
