// TASK 1
const likeButton = document.querySelector("#likeBtn");
const resetButton = document.querySelector("#resetBtn");
const likeCounter = document.querySelector("#likeCount");
let counter = 0;

likeButton.addEventListener("click", function () {
  counter++;
  likeCounter.textContent = "Likes: " + counter;
});

resetButton.addEventListener("click", function () {
  counter = 0;
  likeCounter.textContent = "Likes: 0";
});

// TASK 2
const nameInput = document.querySelector("#nameInput");
const greetButton = document.querySelector("#greetBtn");
const greetMessage = document.querySelector("#greetMsg");
let res = "";

greetButton.addEventListener("click", function () {
  if (nameInput.value.trim() === "") {
    res = "Please enter your name first.";
  } else {
    res = `Hello, ${nameInput.value}`;
  }
  greetMessage.textContent = res;
  nameInput.value = "";
  nameInput.focus();
});

// TASK 3

//liveOutput liveInput
const liveIN = document.querySelector("#liveInput");
const liveOUT = document.querySelector("#liveOutput");

liveIN.addEventListener("input", function (event) {
  const currentValue = event.target.value;
  console.log(liveIN.value.length);

  if (currentValue === "") {
    liveOUT.textContent = "Waiting...";
  } else if (liveIN.value.length > 20) {
    liveOUT.textContent = "Long!!!";
  } else {
    liveOUT.textContent = currentValue;
  }
});

// TASK 4
//keyLog keyInput
const keyLog = document.querySelector("#keyLog");
const keyInput = document.querySelector("#keyInput");

keyInput.addEventListener("keydown", function (event) {
  console.log(event);

  if (event.key === "Escape") {
    keyLog.textContent = "";
    keyInput.value = "";
    return;
  }

  let prefix = "";
  if (event.ctrlKey && event.key !== "Control") {
    prefix += "Ctrl + ";
  }

  if (event.shiftKey && event.key !== "Shift") {
    prefix += "Shift + ";
  }

  if (event.altKey && event.key !== "Alt") {
    prefix += "Alt + ";
  }

  keyLog.textContent = "You Pressed: " + prefix + event.key;
});

// TASK 5

const taskList = document.getElementById("taskList");

taskList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    if (event.target.style.textDecoration === "line-through") {
      event.target.style.textDecoration = "none";
    } else {
      event.target.style.textDecoration = "line-through";
    }
  }
});

taskList.addEventListener("dblclick", function (event) {
  console.log(event);

  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});

// TASK 6

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailField = e.target.emailInput;
  const subjectField = e.target.subjectInput;

  const emailValue = emailField.value.trim();
  const subjectValue = subjectField.value.trim();

  if (emailValue === "" || subjectValue === "") {
    formStatus.textContent = "Please fill in all fields.";
    formStatus.style.color = "red";
  } else {
    formStatus.textContent = `Message sent to ${emailValue}!`;
    formStatus.style.color = "green";

    emailField.value = "";
    subjectField.value = "";
  }
});