function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var Cls = function Cls() {
    "use strict";
    _classCallCheck(this, Cls);
    this.x = 12;
};
Cls.y = "ok";
export default Cls;
var C = function C() {
    "use strict";
    _classCallCheck(this, C);
};
/**
 * @typedef {string | number} default
 */ // @filename: index2.js
// merge type alias and class (error message improvement needed, see #32368)
export { C as default };
/**
 * @typedef {string | number} default
 */ // @filename: index3.js
// merge type alias and variable (behavior is borked, see #32366)
var x = 12;
export { x as default }; /**
 * @typedef {string | number} default
 */ 
