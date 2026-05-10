// ========================[Task 8]========================
console.log("========================[Task 8]========================");

console.log(2 + 3 * 4);                 
console.log((2 + 3) * 4);
console.log(2 ** 3 * 2);
console.log(10 % 3 + 1);
console.log(5 + 3 > 7 && 4 !== 5);

// The expected output for each in order. before running the code.
// 14
// 20
// 16
// 2
// true

// ========================[Task 9]========================
console.log("========================[Task 9]========================");

console.log(true && "hello");
console.log(false && "hello");
console.log(0 || "default");
console.log("value" || "default");
console.log(null ?? "fallback");

// The expected output for each in order. before running the code.
// hello
// false
// default
// value
// fallback

// ========================[Task 10]========================
console.log("========================[Task 10]========================");

const price = 120;
const quantity = 3;
const discountPercent = 10;

const subtotal = price * quantity;
const discountApplied = subtotal * (discountPercent / 100)
const finalTotal = subtotal - discountApplied

console.log(`subtotal: ${subtotal} ┃┃ discount: ${discountApplied} ┃┃ total: ${finalTotal}`);

// ========================[Task 11]========================
console.log("========================[Task 11]========================");

let number = 17;

if(number % 2 === 0){
    console.log(`the number ${number} is even`);
}
else{
    console.log(`the number ${number} is odd`);
}

// ========================[Task 12]========================
console.log("========================[Task 12]========================");
let x = 0;
//rewritten to compind assignmnt operators
//x = x + 5;
x+=5;

//x = x * 2;
x*=2;

//x = x - 3;
x-=3;

//x = x ** 2;
x**=2;

//x = x % 7;
x%=7;

// ========================[Task 13]========================
console.log("========================[Task 13]========================");

let weight = 70;
let height = 1.75;

console.log("BMI:", (weight / (height**2)).toFixed(1));

// ========================[Task 14]========================
console.log("========================[Task 14]========================");

let isLoggedIn = true;
let isAdmin = false;
let age = 20;


if (isLoggedIn && age>=18) {
    console.log("Condition 1 is met");
} else {
    console.log("Condition 1 is NOT met");
}

if (isLoggedIn && isAdmin) {
    console.log("Condition 2 is met");
} else {
    console.log("Condition 2 is NOT met");
}

if (isLoggedIn || age>=21) {
    console.log("Condition 3 is met");
} else {
    console.log("Condition 3 is NOT met");
}

