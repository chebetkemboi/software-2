function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

const sides = parseInt(prompt("How many sides does the die have?"));

let result;
let output = "";

do {
    result = rollDice(sides);
    output += `<li>${result}</li>`;
} while (result !== sides);

document.querySelector("#target").innerHTML = output;