//// [exportImportAlias.ts]
// expect no errors here
var A, C, X, Z, K, M, A1, X1, Y, K1, L;
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
(A1 = A || (A = {})).x = "hello world", A1.Point = function Point(x, y) {
    _class_call_check(this, Point), this.x = x, this.y = y;
}, (C || (C = {})).a = A, C.a.x, new C.a.Point(0, 0), Y = function() {
    return 42;
}, (X1 = X || (X = {})).Y = Y, (Y = X1.Y || (X1.Y = {})).Point = function Point(x, y) {
    _class_call_check(this, Point), this.x = x, this.y = y;
}, (Z || (Z = {})).y = X.Y, Z.y(), new Z.y.Point(0, 0), K1 = K || (K = {}), L = function L(name) {
    _class_call_check(this, L), this.name = name;
}, K1.L = L, (L = K1.L || (K1.L = {})).y = 12, (M || (M = {})).D = K.L, new M.D("Hello");
