function even(array) {
    const evenNumbers = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumbers.push(array[i]);
        }
    }

    return evenNumbers;
}

const numbers = [2, 7, 4];

const result = even(numbers);

console.log("Original array:", numbers);
console.log("New array:", result);