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

var arr = [
    {
        word: "Max",
        hint: "1x Wordl champion"
    },
    {
        word: "Lewis",
        hint: "7x World Champion"
    },
    {
        word: "COTA"
        hint: "F1 track in America"
    },
]































// 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