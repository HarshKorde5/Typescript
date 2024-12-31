
function CheckEven(No:number):boolean
{
    if((No%2)==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var value1 : number = 11;
var Result : boolean = false;

Result = CheckEven(value1);
if(Result == true)
{
    console.log("It is even number");
}
else
{
    console.log("It is odd number");
}

