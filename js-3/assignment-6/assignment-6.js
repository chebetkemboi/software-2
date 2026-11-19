
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let result;
let list = "<ul>";

do {
    result = rollDice();
    list += `<li>${result}</li>`;
} while (result !== 6);

list += "</ul>";

document.querySelector("#target").innerHTML = list;
