function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _getPrototypeOf(o1) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    }, _getPrototypeOf(o1);
}
function _setPrototypeOf(o1, p) {
    return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o1, p) {
        return o1.__proto__ = p, o1;
    }, _setPrototypeOf(o1, p);
}
var Common = {};
Common.I = function _class() {
    "use strict";
    _classCallCheck(this, _class), this.i = 1;
}, Common.O = (function(_I) {
    "use strict";
    !function(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: !0,
                configurable: !0
            }
        }), superClass && _setPrototypeOf(subClass, superClass);
    }(_class, _I);
    var _super = function(Derived) {
        var hasNativeReflectConstruct = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (e) {
                return !1;
            }
        }();
        return function() {
            var obj, self, call, result, Super = _getPrototypeOf(Derived);
            if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else result = Super.apply(this, arguments);
            return self = this, (call = result) && ("object" == ((obj = call) && "undefined" != typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj) || "function" == typeof call) ? call : (function(self) {
                if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return self;
            })(self);
        };
    }(_class);
    function _class() {
        var _this;
        return _classCallCheck(this, _class), (_this = _super.call(this)).o = 2, _this;
    }
    return _class;
})(Common.I);
var o = new Common.O(), i = new Common.I();
o.i, o.o, i.i;
