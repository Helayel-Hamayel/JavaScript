console.log("========================[Task 1]========================");

const title = document.querySelector("#mainTitle")
const feat = document.querySelector("#features")
const desc = document.querySelector("p")

console.log(title.textContent, desc.textContent)

console.log("========================[Task 2]========================");

title.textContent = "Welcome to the Dashboard"
desc.textContent = "Introducing Iphone 15!"
desc.classList.remove("hidden")

console.log("========================[Task 3]========================");

title.classList.add("highlight")
desc.classList.remove("hidden")

console.log("========================[Task 4]========================");

feat.lastElementChild.remove()

console.log("========================[Task 5]========================");

let newH2 = document.createElement("h2");
newH2.textContent = "Available Features"
feat.before(newH2);

console.log("========================[Task 6]========================");

const link = document.querySelector("a")
link.setAttribute("href","https://example.com/");
link.textContent = "Go to Dashboard."


