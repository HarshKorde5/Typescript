
function Summation(Arr : number[]) : number
{
    var i : number = 0;
    var Sum : number = 0;

    for(i = 0;i < Arr.length; i++)
    {
        Sum = Sum + Arr[i];
    }

    return Sum;
}

var Arr : number[] = [23,89,6,29,56,45,77,32];

var Result : number = 0;
Result = Summation(Arr);
console.log("Summation is : "+Result);
