function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var C = function C() {
    "use strict";
    _classCallCheck(this, C);
};
var C = ''; // error
var M;
(function(M) {
    var D = function D() {
        "use strict";
        _classCallCheck(this, D);
    };
    var D = 1; // error
})(M || (M = {}));
