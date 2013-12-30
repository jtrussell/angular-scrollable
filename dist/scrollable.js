
/**
 * The scrollable module, fanyc scrolling for angular apps
 *
 * Requires jQuery
 *
 * @see https://github.com/noraesae/perfect-scrollbar
 * @package scrollable
 */

angular.module('scrollable', []);


angular.module('scrollable').directive('scrollable', function() {
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
        element.perfectScrollbar(opts);
      });
    }
  };
});
