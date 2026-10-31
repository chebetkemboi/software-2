const numberOfDice = Number(prompt("How many dice do you want to roll?"));
const desiredSum = Number(prompt("What sum are you interested in?"));

let successfulRolls = 0;
const numberOfSimulations = 10000;

for (let i = 0; i < numberOfSimulations; i++) {
    let sum = 0;

    for (let j = 0; j < numberOfDice; j++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        sum = sum + roll;
    }

    if (sum === desiredSum) {
        successfulRolls++;
    }
}

const probability = successfulRolls / numberOfSimulations * 100;

document.getElementById("result").textContent =
    "Probability to get sum " + desiredSum + " with " + numberOfDice +
    " dice is " + probability.toFixed(2) + "%";