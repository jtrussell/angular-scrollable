
/**
 * The scrollable module, fanyc scrolling for angular apps
 *
 * Requires jQuery
 *
 * @see https://github.com/noraesae/perfect-scrollbar
 * @package scrollable
 */

angular.module('scrollable', []);

angular.module('scrollable').directive('scrollable', [
    'scrollableOptions', function(scrollableOptions) {

  'use strict';

  return {
    link: function(scope, element, attrs) {
      jQuery(function() {
        // We must have non-static position
        var cssPos = element.css('position');
        if('static' === cssPos) {
          element.css('position', 'relative');
        }

        // We'll use our own scrollbars thank you very much
        element.css('overflow', 'hidden');

        // Make it so
        var opts = attrs.scrollable ? scope.$eval(attrs.scrollable) : {};
        opts = angular.extend(scrollableOptions.get(), opts);

        element.perfectScrollbar(opts);
      });
    }
  };
}]);


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
