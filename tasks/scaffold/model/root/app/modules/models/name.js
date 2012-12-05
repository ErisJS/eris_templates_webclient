define([
  "five9"
],
function(Five9, Backbone) {
  var {%= module_name %} = {};

  // Default model.
  {%= module_name+".Model" %} = Backbone.Model.extend({
  });

  // Default collection.
  {%= module_name+".Collection" %} = Backbone.Collection.extend({
    model: {%= module_name %}.Model
  });
  
  return {%= module_name %};
});