function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Foo = function Foo() {
    "use strict";
    _classCallCheck(this, Foo);
};
var Foo2 = function Foo2() {
    "use strict";
    _classCallCheck(this, Foo2);
};
var tmp = 1 << 6, tmp1 = 1 << 6;
var C = /*#__PURE__*/ function() {
    "use strict";
    function C() {
        _classCallCheck(this, C);
    }
    _createClass(C, [
        {
            key: tmp,
            get: // Computed properties
            function get() {
                return new Foo;
            }
        },
        {
            key: tmp1,
            set: function set(p) {}
        }
    ]);
    return C;
}();
