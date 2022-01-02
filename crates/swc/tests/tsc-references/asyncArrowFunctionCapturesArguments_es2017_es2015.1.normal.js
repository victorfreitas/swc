function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
// @target: es2017
// @noEmitHelpers: true
class C {
    method() {
        function other() {}
        var _this = this;
        var fn = function() {
            var _ref = _asyncToGenerator((function*() {
                return yield other.apply(this, arguments);
            }).bind(_this)).bind(_this);
            return function fn() {
                return _ref.apply(this, arguments);
            };
        }();
    }
}
