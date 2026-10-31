const answer = confirm("Should I calculate the square root?");

let result;

if (answer) {
    const number = Number(prompt("Enter a number:"));

    if (number < 0) {
        result = "The square root of a negative number is not defined";
    } else {
        result = "The square root is " + Math.sqrt(number);
    }
} else {
    result = "The square root is not calculated.";
}

document.getElementById("result").textContent = result;