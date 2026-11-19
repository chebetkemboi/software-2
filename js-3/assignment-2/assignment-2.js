
const participants = [];

const number = Number(prompt("How many participants?"));

for (let i = 0; i < number; i++) {
    const name = prompt("Enter participant name:");
    participants.push(name);
}

participants.sort();

let list = "<ol>";

for (let i = 0; i < participants.length; i++) {
    list += `<li>${participants[i]}</li>`;
}

list += "</ol>";

document.querySelector("#target").innerHTML = list;
