function ChkPrime(iNo : number):boolean
{
    var bFlag : boolean = false;
    var i : number = 0;

    for(i = 2;i <= iNo/2;i++)
    {
        if((iNo % i)==0)
        {
            bFlag = true;
            break;
        }
    }

    return bFlag;
}

var iRet : boolean = false;

iRet = ChkPrime(4);

if(iRet == true)
{
    console.log("It is not a prime number");
}
else
{
    console.log("It is a prime number");
}