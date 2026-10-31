const startYear = Number(prompt("Enter the start year:"));
const endYear = Number(prompt("Enter the end year:"));

let list = "<ul>";

for (let year = startYear; year <= endYear; year++) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        list += "<li>" + year + "</li>";
    }
}

list += "</ul>";

document.getElementById("result").innerHTML = list;