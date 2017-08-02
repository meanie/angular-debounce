/**
 * meanie-angular-debounce * https://github.com/meanie/angular-debounce
 *
 * Copyright (c) 2017 Adam Reis <adam@reis.nz>
 * License: MIT
 */
(function (window, angular, undefined) {
  'use strict';

  /**
   * Module definition and dependencies
   */

  angular.module('Debounce.Service', [])

  /**
   * Service definition
   */
  .factory('$debounce', ['$timeout', function ($timeout) {

    //Keep track of debounces
    var debounces = new Map();

    /**
     * Debounce call
     */
    return function $debounce(fn, time) {

      //Clear existing timeout
      if (debounces.has(fn)) {
        var _timeout = debounces.get(fn);
        $timeout.cancel(_timeout);
      }

      //Start new one
      var timeout = $timeout(function () {
        debounces.delete(fn);
        fn();
      }, time);

      //Save in debounces
      debounces.set(fn, timeout);

      //Return
      return timeout;
    };
  }]);
})(window, window.angular);