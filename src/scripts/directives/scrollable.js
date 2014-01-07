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
