const numberOfCandidates = parseInt(prompt("How many candidates?"));

const candidates = [];

for (let i = 0; i < numberOfCandidates; i++) {
    const name = prompt(`Name for candidate ${i + 1}`);

    const candidate = {
        name: name,
        votes: 0
    };

    candidates.push(candidate);
}

const numberOfVoters = parseInt(prompt("How many voters?"));

for (let i = 0; i < numberOfVoters; i++) {
    const vote = prompt("Who do you vote for?");

    if (vote !== "") {
        for (let j = 0; j < candidates.length; j++) {
            if (vote.toLowerCase() === candidates[j].name.toLowerCase()) {
                candidates[j].votes++;
            }
        }
    }
}

candidates.sort((a, b) => {
    return b.votes - a.votes;
});

console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
console.log("results:");

for (let i = 0; i < candidates.length; i++) {
    console.log(`${candidates[i].name}: ${candidates[i].votes} votes`);
}