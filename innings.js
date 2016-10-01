let scores = [1, 1, 1, 2, 2, 2, 3, 3, 3];

function innings(ein, zwei) {
    return ein + zwei;
};
let total = scores.reduce(innings, 0);

console.log(total);