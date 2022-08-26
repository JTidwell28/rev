function getData() {
    var place = document.getElementById("place").value;
    var person = document.getElementById("person").value;
    var verb = document.getElementById("verb").value;
    var adjective = document.getElementById("adjective").value;
    var adverb = document.getElementById("adverb").value;



    document.getElementById("sentence").innerHTML = sentences(verb , adjective , adverb , person , place);
}


function sentences(verb , adjective , adverb , person , place) {

    sentenceArray = [`Today I had to ${verb} ${adverb}. But right in the middle  of it, ${person} was in ${place}` , `${person} was in ${place} trying to ${verb}. However, ${person} left an ${adjective} shirt behind. while crying ${adverb}.` , `It's been a long time sine ${person} decided to ${verb} in ${place}. What some people say that ${person} screamed "THIS STRAWBERRY IS{adjective}! We thought this ${person} is crazy.`]

    ranN = Math.floor(Math.random() * sentenceArray.length)
    return sentenceArray[ranN];

}

// Second Game

var a = [1,2,4,9]

var wordArr = [
    {
        word: "Max",
        hint: "1x Wordl champion"
    },
    {
        word: "Lewis",
        hint: "7x World Champion"
    },
    {
        word: "COTA",
        hint: "F1 track in America"
    },
]

var rN= Math.floor(Math.random() * wordArr.length);

var word = wordArr[rN].word;
var hint = wordArr[rN].hint;

document.getElementById("word").innerHTML = word;
document.getElementById("hint").innerHTML = hint;
var w = document.getElementById("word");
var correct = []
var counter = word.length + 2;

document.getElementById("wrong").innerHTML = counter

var splitWord = word.split("");
var emptySplitword = [];

console.log(splitWord)

for (i = 0; i <  splitWord.length; i++) {
    emptySplitword[i] = "-"
    console.log(emptySplitword);
    w.innerHTML = emptySplitword.join(" ")
}

function enterLetter() {
    var letter = document.getElementById("letter").value;
    
    for (x = 0; x < splitWord.length; x++) {
        if (letter == splitWord[x]) {
            emptySplitword[x] = letter;
            w.innerHTML = emptySplitword.join(" ")
            document.getElementById("letter").value
            correct.push(1);
        }else {
            document.getElementById("letter").value = "";
        }
    }


    if (correct.length == emptySplitword.length) {
        alert("END")
    } else if (counter > 1){
        counter -= 1;
        document.getElementById("wrong").innerHTML = counter
    }else if (counter == 1){
        alert("You lose")
    }
        
}






























// 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