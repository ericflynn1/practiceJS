
let numbers = [1, 2, 3, 5, 15, 20, 21, 30];

function multiples(nummers) {
    let divisibles = [];
    for (let i = 0; i < nummers.length; i++) {
        if (nummers[i] % 3 === 0 && nummers[i] % 5 === 0) {
            divisibles.push(nummers[i]);
        }
    }
    return divisibles;
}
function answers(nummers) {
    if (nummers % 3 === 0 && nummers % 5 === 0) {
        return true;
    } else {
        return false;
    }
}

let filtered = numbers.filter(answers);

console.log(filtered);