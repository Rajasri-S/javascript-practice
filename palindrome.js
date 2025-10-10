var word = "Malayalam";
var reversedword = word.split(" ").reverse().join(" ");
if(word == reversedword)
{
    console.log("This is palindrome");
}
else{
    console.log("Not a palindrome");
}