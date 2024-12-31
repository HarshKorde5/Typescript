var Arithmatic = /** @class */ (function () {
    function Arithmatic(Value1, Value2) {
        this.Number1 = Value1;
        this.Number2 = Value2;
    }
    Arithmatic.prototype.Addition = function () {
        return this.Number1 + this.Number2;
    };
    Arithmatic.prototype.Substraction = function () {
        return this.Number1 - this.Number2;
    };
    Arithmatic.prototype.Multiplication = function () {
        return this.Number1 * this.Number2;
    };
    Arithmatic.prototype.Division = function () {
        return this.Number1 / this.Number2;
    };
    return Arithmatic;
}());
var aobj = new Arithmatic(10, 11);
console.log(aobj.Addition());
console.log(aobj.Substraction());
console.log(aobj.Multiplication());
console.log(aobj.Division());
