
function Area(radius : number) : number
{
    var pi : number = 3.14;
    var Area : number = 0;

    Area = pi * radius * radius;

    return Area;
}

var iRet : number = 0

iRet = Area(5);

console.log("Area of circle is : "+iRet);