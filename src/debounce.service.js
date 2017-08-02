
/**
 * Module definition and dependencies
 */
angular.module('Debounce.Service', [])

/**
 * Service definition
 */
.factory('$debounce', function($timeout) {

  //Keep track of debounces
  const debounces = new Map();

  /**
   * Debounce call
   */
  return function $debounce(fn, time) {

    //Clear existing timeout
    if (debounces.has(fn)) {
      const timeout = debounces.get(fn);
      $timeout.cancel(timeout);
    }

    //Start new one
    const timeout = $timeout(() => {
      debounces.delete(fn);
      return fn();
    }, time);

    //Save in debounces
    debounces.set(fn, timeout);

    //Return
    return timeout;
  };
});
