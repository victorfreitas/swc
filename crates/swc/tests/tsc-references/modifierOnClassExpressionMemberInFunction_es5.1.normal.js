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
// @declaration: true
// @declaration: true
function g() {
    var _C;
    var x = (_C = /*#__PURE__*/ function() {
        "use strict";
        function C() {
            _classCallCheck(this, C);
            this.prop1 = 1;
        }
        _createClass(C, [
            {
                key: "foo",
                value: function foo() {}
            }
        ]);
        return C;
    }(), _C.prop2 = 43, _C);
}
