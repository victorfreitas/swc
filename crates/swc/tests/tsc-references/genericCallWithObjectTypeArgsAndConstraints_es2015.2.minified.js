class X {
}
function foo(t, t2) {}
var c1 = new X(), d1 = new X();
function foo2(t, t2) {}
foo(c1, d1), foo(c1, c1), foo2(c1, d1), foo2(c1, c1);
