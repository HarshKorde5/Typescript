
function Fibonacci(iNo : number):void
{
    var No1 : number = -1;
    var No2 : number = 1;
    var No3 : number = 0;

    while(No3 < iNo)
    {
        No3 = No1+No2;
        console.log(No3);
        No1 = No2;
        No2 = No3;
    }
}

Fibonacci(21);