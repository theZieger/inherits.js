/*!
 * toObject | v0.1.0 | Easily inherit prototypes.
 * Copyright (c) 2017 Eric Zieger (MIT license)
 * https://github.com/theZieger/toObject/blob/master/LICENSE
 */
(function(root, factory) {
  /** global: define */
  if (typeof define === "function" && define.amd) {
    define('inherits', factory);
  /** global: module */
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.inherits = factory();
  }
}(this, function(undefined) {

  /**
   * inherit the prototype of the SuperConstructor
   *
   * Warning: Changing the prototype of an object is, by the nature of how
   * modern JavaScript engines optimize property accesses, a very slow
   * operation, in every browser and JavaScript engine. So instead of using
   * Object.setPrototypeOf or messing with __proto__, we create a new object
   * with the desired prototype using Object.create().
   *
   * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
   *
   * @param {Object} Constructor
   * @param {Object} SuperConstructor
   *
   * @throws {TypeError} if arguments are `null`, `undefined`, or
   *                     `SuperConstructor` has no prototype
   *
   * @returns {Void}
   */
  return function(Constructor, SuperConstructor) {
    if (Constructor === undefined || Constructor === null) {
      throw new TypeError('Constructor argument is undefined or null');
    }

    if (SuperConstructor === undefined || SuperConstructor === null) {
      throw new TypeError('SuperConstructor argument is undefined or null');
    }

    if (SuperConstructor.prototype === undefined) {
      throw new TypeError('SuperConstructor.prototype is undefined');
    }

    /**
     * for convenience, `SuperConstructor` will be accessible through the
     * `Constructor.super_` property
     */
    Constructor.super_ = SuperConstructor;

    Constructor.prototype = Object.create(SuperConstructor.prototype);
    Constructor.prototype.constructor = Constructor;
  };
}));
