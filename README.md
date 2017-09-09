# inherits.js 0.1.0
> Easily inherit prototypes.

## Getting started

There is more than one way to use `inherits.js` inside your project. I prefer using npm for dependency management.

If you haven't used [npm](http://npmjs.com/) (Node Package manager) before, be sure to check out the [Getting Started](https://docs.npmjs.com/getting-started/what-is-npm) guide, as it explains how to install and use npm. Once you're familiar with that process, you may install the `inherits.js` module with this command inside your project:

```bash
npm install inherits.js --save-dev
```

Once the module has been installed, you may integrate that file into your build process (e.g concatenating and uglifying your JS with Grunt or whatever) since the `--save-dev` option is meant for development only.

## inherits(constructor, superConstructor)

Inherit the prototype from one constructor into another. The prototype of Constructor will be set to a new object created from SuperConstructor.

It does not make use of Object.setPrototype since it's usage is to be avoided following the [MDN warning about Object.setPrototypeOf](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) and instead uses Object.create to also fullfill support for older browsers.

Anyway. Here is a code example how to use the `inherits.js` function:

```javascript
// make sure inherits.js is already available when this code runs

// a super class
var SuperClass = function() {
    this.someProperty = 42;
}

SuperClass.prototype.justDoIt = function(msg) {
    alert(msg);
}

// a class we want to inherit from SuperClass
var DoTheFlop = function() {
    // this makes sure to also inherit the properties of SuperClass defined inside it's constructor function
    // which may be crucial for it's methods to run
    SuperClass.call(this);
}

inherits(DoTheFlop, SuperClass);

DoTheFlop.prototype.flop = function() {
    this.justDoIt('Everybody do the flop!');
}

```
