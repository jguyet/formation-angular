;
var Cube = /** @class */ (function () {
    function Cube(x, y) {
        this.position = { x: 0, y: 0 };
        this.position.x = x;
        this.position.y = y;
    }
    Cube.prototype.getPosition = function () {
        return this.position;
    };
    return Cube;
}());
