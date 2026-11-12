const target = document.getElementById("target");

const firstItem = document.createElement("li");
const secondItem = document.createElement("li");
const thirdItem = document.createElement("li");

firstItem.textContent = "First item";
secondItem.textContent = "Second item";
thirdItem.textContent = "Third item";

target.appendChild(firstItem);
target.appendChild(secondItem);
target.appendChild(thirdItem);

secondItem.classList.add("my-item");