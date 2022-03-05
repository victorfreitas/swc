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
var _B;
// @target: ES5
// @lib: es5,es2015.promise
// @noEmitHelpers: true
// https://github.com/Microsoft/TypeScript/issues/20744
class A {
}
A.B = (_B = class B {
    static func2() {
        return new Promise((resolve)=>{
            resolve(null);
        });
    }
}, _B.C = class C {
    static func() {
        return _asyncToGenerator(function*() {
            yield _B.func2();
        })();
    }
}, _B);
A.B.C.func();
