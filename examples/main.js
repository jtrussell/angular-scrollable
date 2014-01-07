(function(ng) {
'use strict';

ng.module('demo', ['scrollable']);

ng.module('demo').config(function(scrollableOptionsProvider) {
  
  scrollableOptionsProvider.set({
    /**
     * Set default options, use anything from
     * @see https://github.com/noraesae/perfect-scrollbar#optional-parameters
     */
  });

});

}(angular));
