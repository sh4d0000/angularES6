"use strict";
Object.defineProperties(exports, {
  Calculator: {get: function() {
      return Calculator;
    }},
  __esModule: {value: true}
});
var $__annotations_46_js__;
var Anno = ($__annotations_46_js__ = require("./annotations.js"), $__annotations_46_js__ && $__annotations_46_js__.__esModule && $__annotations_46_js__ || {default: $__annotations_46_js__}).Anno;
var Calculator = function Calculator() {};
($traceurRuntime.createClass)(Calculator, {
  add: function(x, y) {
    return x + y;
  },
  subtract: function(x, y) {
    return x - y;
  }
}, {});
Calculator.annotations = [new Anno];
