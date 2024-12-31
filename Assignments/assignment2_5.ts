

function ChkString(str : string ): number
{
    return str.search('Marvellous')
}

var s : string = "Pune Kothrud Marvellous Infosystems";

var ret : number = 0;
ret = ChkString(s);
if(ret >= 0)
{
    console.log("Present");
}
else
{
    console.log("Absent");
}
