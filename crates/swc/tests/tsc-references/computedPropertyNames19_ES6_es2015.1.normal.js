// @target: es6
var M;
(function(M) {
    var obj = {
        [this.bar]: 0
    };
})(M || (M = {}));
