const prompt = require("prompt-sync")();
let String = prompt("Enter the string: ");
let string = [];
function reversestring()

{
    for(let i=String.length-1;i>=0;i--)
        

    {
    string += (String[i]);
}
console.log(string);
}
reversestring();