
class Circle
{
    public Radius;
    public Pi;

    constructor(Value1:number,Value2:number)
    {
        this.Radius = Value1;
        this.Pi = Value2;
    }

    public Area() : number
    {
        return this.Pi*this.Radius*this.Radius;
    }
}


var obj1 = new Circle(2,3.14);
var obj2 = new Circle(3,3.14);

console.log(obj1.Area());
console.log(obj2.Area());
