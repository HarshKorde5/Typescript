var Circle = /** @class */ (function () {
    function Circle(Value1, Value2) {
        this.Radius = Value1;
        this.Pi = Value2;
    }
    Circle.prototype.Area = function () {
        return this.Pi * this.Radius * this.Radius;
    };
    return Circle;
}());
var obj1 = new Circle(2, 3.14);
var obj2 = new Circle(3, 3.14);
console.log(obj1.Area());
console.log(obj2.Area());
