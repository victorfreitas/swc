function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _classPrivateMethodInit(obj, privateSet) {
    _checkPrivateRedeclaration(obj, privateSet);
    privateSet.add(obj);
}
var _ref, _method = new WeakSet();
var C = function C() {
    "use strict";
    _classCallCheck(this, C);
    _classPrivateMethodInit(this, _method);
};
C.s = _classPrivateMethodGet(_ref = new C(), _method, method).call(_ref);
function method() {
    return 42;
}
console.log(C.s);
