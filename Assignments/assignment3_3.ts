
class Circle
{
}

class CircleX extends Circle
{
    public Radius;
    public Pi;

    constructor(Value1:number)
    {
        super();
        this.Radius = Value1;
        this.Pi = 3.14;
    }

    public Circumference():number
    {
        return 2*this.Pi*this.Radius;
    }

    public Area() : number
    {
        return this.Pi*this.Radius*this.Radius;
    }
}

var obj = new CircleX(2);
console.log(obj.Circumference());
console.log(obj.Area());

var obj1 = new CircleX(3);
console.log(obj1.Circumference());
console.log(obj1.Area());
