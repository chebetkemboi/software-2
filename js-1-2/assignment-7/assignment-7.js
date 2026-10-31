const numberOfRolls = Number(prompt("How many times should the dice be rolled?"));

let sum = 0;

for (let i = 0; i < numberOfRolls; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    sum = sum + roll;
}

document.getElementById("result").textContent = "The sum of the dice rolls is " + sum;