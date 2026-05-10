// ========================[Task 15]========================
console.log("========================[Task 15]========================");
let light = "yellow";

if (light === "green") {
    console.log("Go");
} else if (light === "yellow") {
    console.log("Slow down");
} else if (light === "red") {
    console.log("Stop!");   
} else {
    console.log("Unknown Signal"); 
}

// ========================[Task 16]========================
console.log("========================[Task 16]========================");

let age = 25;
let isMember = true;

if (age >= 18 && isMember) {
    console.log("Full access — welcome member!"); 
} else if(age >= 18 && !isMember) {
    console.log("Guest access — Consider joining"); 
} else if(age < 18 && isMember) {
    console.log("junior member access"); 
} else {
    console.log("No access"); 
}

// ========================[Task 17]========================
console.log("========================[Task 17]========================");

let score = 55;

// Rewritten each as single ternary expression
// 1
let msg = (10 > 5) ? "yes" : "no";
console.log(`msg: ${msg}`);

// 2
let fee = isMember ? 5 : 20;
console.log(`fee: ${fee}`);

// 3
let label = (score >= 50) ? "pass" : "fail";
console.log(`label: ${label}`);

// ========================[Task 18]========================
console.log("========================[Task 18]========================");

let month = 7;

switch(month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;

  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;

  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;

  case 9:
  case 10:
  case 11:
    console.log("Autumn");
    break;

  default:
    console.log("Wrong input");
}

// ========================[Task 19]========================
console.log("========================[Task 19]========================");

const number = 15;
let output = "";

if (number % 3 === 0) {
    output += "Fizz";
}
if (number % 5 === 0) {
    output += "Buzz";
}

console.log(output);

// ========================[Task 20]========================
console.log("========================[Task 20]========================");

let password = "Hello1!"

if (password.length < 6) {
    console.log("Weak");
} else if (password.length >= 6 && password.length < 10) {
    console.log("Medium");
} else if (password.length >= 10) {
    console.log("Strong");
}

// ========================[Task 21]========================
console.log("========================[Task 21]========================");

const x = 5;
console.log(x > 3 && x < 10 ? "in range" : "out");
console.log(!!(0));
console.log(!!("hello"));
console.log(x === 5 || x === 10 ? "match" : "no");

// The expected output for each in order. before running the code.
// "in range"
// false
// true
// match

// ========================[Here ends the Third Chapter]========================