
function Maximum(No1 : number,No2 : number,No3 : number) : number
{
    var iMax : number = 0;

    if(No1 > iMax)
    {
        iMax = No1;
    }
    
    if(No2 > iMax)
    {
        iMax = No2;
    }
    
    if(No3 > iMax)
    {
        iMax = No3;
    }
    return iMax;
}

var iRet : number = 0;

iRet = Maximum(1,9,3);

console.log("Maximum number is : "+iRet);



