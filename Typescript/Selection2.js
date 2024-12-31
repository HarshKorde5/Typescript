function CheckEven(No) {
    if ((No % 2) == 0) {
        return true;
    }
    else {
        return false;
    }
}
var value1 = 11;
var Result = false;
Result = CheckEven(value1);
if (Result == true) {
    console.log("It is even number");
}
else {
    console.log("It is odd number");
}
