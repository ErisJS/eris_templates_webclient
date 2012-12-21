define([
  "five9",
  "helpers/base.view",
  "core"
],
function(Five9, BaseViews, Core) {
  var {%= view_name %} = {%= base_view_name %}.extend({
    template: "{%= name %}",

    initialize: function() {
    },
    onClose: function() {
    },

    events: {
    }
  });
  _.extend({%= view_name %}.prototype, BaseViews.ItemView);

  return {%= view_name %};
});
