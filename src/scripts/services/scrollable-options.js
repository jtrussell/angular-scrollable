
angular.module('scrollable').provider('scrollableOptions', function() {
  'use strict';

  var options = {};

  this.set = function(opts) {
    angular.extend(options, opts);
  };
  
  this.$get = function() {
    var exports = {
      get: function() {
        return angular.copy(options);
      }
    };
    return exports;
  };
});
