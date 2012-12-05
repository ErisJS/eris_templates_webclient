'use strict';

exports.description = "Add a new application widget";
exports.notes = "Generates a new widget";

exports.template = function(grunt, scaffold, done) {
  var util = grunt.util || grunt.utils;
  var _ = util._;

  scaffold.process({}, [
    {
      name: "name",
      message: "Widget Name",
      validator: /^[\w\-\.]+$/
    },
    {
      name: "base_view_name",
      message: "Base View Name",
      validator: /^[\w\-\.]+$/,
      "default": "Five9.Marionette.ItemView"
    }
  ], function(err, props) {
    // files to copy and process
    var files = scaffold.filesToCopy(props);

    props.name = props.name.toLowerCase();
    props.module_name = props.name[0].toUpperCase() + props.name.slice(1);
    props.view_name = props.module_name + 'View';

    // copy and process files
    scaffold.copyAndProcess(files, props, {});

    // complete
    done();
  });

};
