var x;
x = 1;
x = '';
x = true;
var a;
x = a;
x = null;
class C {
}
var b;
x = C;
x = b;
var c;
x = c;
var M;
(function(M1) {
    var x = M1.x = 1;
})(M || (M = {}));
x = M;
x = {
    f () {}
};
function f(a1) {
    x = a1;
}
x = f;
var E;
(function(E) {
    E[E["A"] = 0] = "A";
})(E || (E = {}));
x = E;
x = E.A;
