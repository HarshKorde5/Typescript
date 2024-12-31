
function Maximum(Arr : number[]) : number
{
    var i : number = 0;
    var iMax : number = 0;
    var iMax2 : number = 0;

    for(i = 0;i < Arr.length; i++)
    {
        if(iMax < Arr[i])
        {
            iMax = Arr[i];
        }
    }

    for(i = 0;i < Arr.length; i++)
    {
        if(iMax2 < Arr[i] && Arr[i] < iMax)
        {
            iMax2 = Arr[i];
        }
    }

    return iMax2;
}

var Arr : number[] = [23,89,6,29,56,45,77,32];

var Result : number = 0;
Result = Maximum(Arr);
console.log("Maximum is : "+Result);
