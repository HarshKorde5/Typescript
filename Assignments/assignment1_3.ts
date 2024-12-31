
function DisplayFactors(iNo : number):void
{
    var i : number = 0;
    
    console.log("Factors are : ");

    for(i = 1;i <= iNo/2;i++)
    {
        if((iNo % i)==0)
        {
            console.log(i);
        }
    }
}

DisplayFactors(20);