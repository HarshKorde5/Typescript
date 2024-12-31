
class Arithmatic
{
    public Number1;
    public Number2;

    constructor(Value1 : number,Value2 : number)
    {
        this.Number1 = Value1;
        this.Number2 = Value2;
    }

    public Addition() : number
    {
        return this.Number1+this.Number2;
    }


    public Substraction() : number
    {
        return this.Number1-this.Number2;
    }


    public Multiplication() : number
    {
        return this.Number1*this.Number2;
    }


    public Division() : number
    {
        return this.Number1/this.Number2;
    }

}

var aobj = new Arithmatic(10,11);
console.log(aobj.Addition());
console.log(aobj.Substraction());
console.log(aobj.Multiplication());
console.log(aobj.Division());

var aobj2 = new Arithmatic(21,51);
console.log(aobj2.Addition());
console.log(aobj2.Substraction());
console.log(aobj2.Multiplication());
console.log(aobj2.Division());