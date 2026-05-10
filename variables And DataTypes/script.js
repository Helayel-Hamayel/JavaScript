// ========================[Task 1]========================

console.log("========================[Task 1]========================");
console.log(typeof 42);
console.log(typeof "42");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});

// The expected output for each in order. without running the code.
// number
// string
// boolean
// undefined
// object
// object

// ========================[Task 2]========================

// const 1firstName = "Sara";
// invalid variable name, you cant start variable with number.
const firstName1 = "Sara";

// let my-age = 22;
// cant use the hyphen in variable, it could confuse the compiler you are trying to subtract age from my.
let myAge = 22;

//const score = 0;
//score = 100;
// you cannot reassign values with const variables, const are read only.
let score = 0;
score = 100;

//let let = "bad";
// let is a reserved keyword in the lanugage.
let label = "bad";

// ========================[Task 3]========================

const name = "Sara";
const age = 20;
const grade = "B";
const isPassed = true;
console.log("========================[Task 3]========================");
console.log(
  `Student ${name},`,
  ",age " + age,
  ",got grade " + grade,
  `,Passed: ${isPassed}`,
);

// ========================[Task 4]========================

const msg = "I love javascript programming";
console.log("========================[Task 4]========================");
// 1
console.log("1]. the message length is: " + msg.length);

// 2
console.log("2]. ALL CAPS: " + msg.toUpperCase());

// 3
console.log("3]. Slice : " + msg.slice(7, 17));

// 4
if (msg.search("love") != -1) {
  console.log("4]. The message has the word Love");
} else {
  console.log("4]. The message doesnt has the word Love");
}

// ========================[Task 5]========================
console.log("========================[Task 5]========================");
console.log(0 == false);
console.log(0 === false);
console.log("1" == 1);
console.log("1" === 1);
console.log("" == false);
console.log(null == undefined);
console.log(null === undefined);

// The expected output for each in order. without running the code.
// true
// false
// true
// false
// true
// true
// false

// ========================[Task 6]========================
console.log("========================[Task 6]========================");
let a = 5;
let b = 10;

// using arithmatic
a = a + b;
b = a - b;
a = a - b;

console.log(`a = ${a}, b = ${b}`);

// ========================[Task 7]========================
console.log("========================[Task 7]========================");
// The expected output for each in order. before running the code.
// "hello"   ┃┃ TRUE
//   ""      ┃┃ FALSE
//    0      ┃┃ FALSE
//    1      ┃┃ TRUE
//   null    ┃┃ FALSE
//   false   ┃┃ FALSE
//   []      ┃┃ FALSE
//   NaN     ┃┃ FALSE

console.log(Boolean("hello"));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(null));
console.log(Boolean(false));
console.log(Boolean([]));
console.log(Boolean(NaN));

// ========================[Here ends the First Chapter]========================
