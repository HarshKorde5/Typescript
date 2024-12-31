var Marks : number[] = [11,21,51,101,111];

var i : number = 0;
console.log("Array traversal using for loop : ");
for(i = 0;i < Marks.length;i++)
{
    console.log(Marks[i]);
}

i = 0;
console.log("Array traversal using while loop : ");
while(i < Marks.length)
{
    console.log(Marks[i]);
    i++;
}

i = 0;
console.log("Array traversal using do-while loop : ");
do
{
    console.log(Marks[i]);
    i++;
}while(i < Marks.length);
