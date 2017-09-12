/*!
 * inherits.js | v0.2.0 | Easily inherit prototypes.
 * Copyright (c) 2017 Eric Zieger (MIT license)
 * https://github.com/theZieger/inherits.js/blob/master/LICENSE
 *
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
module.exports = function(Constructor, SuperConstructor) {
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
