define([
  'five9',
  'helpers/base.view',
  './views/view'
],
function(Five9, BaseViews, View) {
  var Widget = BaseViews.BaseWidget.extend({
    initialize: function(options) {
      return new View({model:options.model});
    }
  });
  return Widget;
});
