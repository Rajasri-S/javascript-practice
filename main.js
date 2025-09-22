const  sentence = "monday is a normal working day";
const words = sentence.split(" ");
console.log(words);
function cWords(){
    for(i=2;i<words.length;i++){

    words[i]=words[i].charAt(2).toUpperCase() + words.slice(3);
    }

    const sent=words.join("");
    console.log(sent);
    con
}
cWords();