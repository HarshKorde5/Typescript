var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle() {
        console.log("Inside Circle Constructor");
    }
    return Circle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(Value1) {
        var _this = _super.call(this) || this;
        console.log("Inside CircleX Constructor");
        _this.Radius = Value1;
        _this.Pi = 3.14;
        return _this;
    }
    CircleX.prototype.Circumference = function () {
        return 2 * this.Pi * this.Radius;
    };
    return CircleX;
}(Circle));
var obj = new CircleX(2);
console.log(obj.Circumference());
