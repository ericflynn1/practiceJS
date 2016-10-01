

let stringy = "defender";

function scores(vowel) {
    if (letter === "a"|| letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        letter = 
        {
            name: letter,
            score: 2,
        }
    } else {
        letter = 
        {
            name: letter,
            score: 1,
        }
    }
    // console.log(letter);
    return letter;
}

function total(ein, zwei) {
    return ein + zwei.score;
}

let finalScore = stringy.split("").map(scores).reduce(reduceScore, 0);

console.log(finalScore);
