
let words = "Once more unto the breach!";

function scores(vowel) {
    if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
        return 2;
    } else {
        return 1;
    }
}

function total(ein, zwei) {
    return ein + zwei;
}

function splitz(word) {
    let splitWord = {
        name: word,
        letters: word.split(""),
        score: word.split("").map(score).reduce(total, 0),
    }
    return splitWord;
}

function most(drei, vier) {
    if (drei.score > vier.score) {
        return drei;
    } else {
        return vier;
    }
}
function alles(sentence) {
    let splitter = sentence.split(" ");
    console.log(splitter);
    let grun = splitter.map(splitz);
    let rot = grun.reduce(pickTheBest, grun[0]);
    return rot.name + ": " + rot.score;
}
console.log(testString);
console.log(alles(testString));
