//// [thisMethodCall.ts]
class C {
    method() {}
    other() {
        var _this_method, _object;
        (_object = this) === null || _object === void 0 ? void 0 : (_this_method = _object.method) === null || _this_method === void 0 ? void 0 : _this_method.call(_object);
    }
}
