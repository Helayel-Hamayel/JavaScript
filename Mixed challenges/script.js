
import { isEven } from '../Functions/script.js';

// ========================[Task 36]========================
console.log("========================[Task 36]========================");

function calculateGrades(name, scores){
    let sum = 0;

    for (let index = 0; index < scores.length; index++) {
        sum += scores[index];
    }


    let avg = sum / scores.length
    let gradeLetter = "F"
    if (avg >= 90) {
        gradeLetter = "A"
    } else if (avg >= 80) {
        gradeLetter = "B"
    } else if (avg >= 70) {
        gradeLetter = "C"
    } else if (avg >= 60) {
        gradeLetter = "D"
    }

    console.log(`${name} | Avg: ${avg} | Grade: ${gradeLetter}`)

}


calculateGrades("Sara" ,[23,56,78,44,66]);
calculateGrades("Ahmed", [80,96,88,94,86]);

// ========================[Task 37]========================
console.log("========================[Task 37]========================");

function checkGuess(arrayOfNumb){
    const secretNum = 42

    for (let index = 0; index < arrayOfNumb.length; index++) {
        if (arrayOfNumb[index] === secretNum) {
            console.log("Correct!");
        } else if (arrayOfNumb[index] > secretNum) {
            console.log("Too High!");
        } else{
            console.log("Too Low!");
        }
    }

}

checkGuess([10, 60, 42])

// ========================[Task 38]========================
console.log("========================[Task 38]========================");

function addditon(a,b){
    console.log(a + b);
}
function multiplication(a,b){
    console.log(a * b);
}

function subtraction(a,b){
    console.log(a - b);
}

function dvision(a,b){
    if (b === 0) {
        console.log("Error: division by zero");
        return
    }
    console.log(a / b);
}

function calculate(a, operator, b){

    switch (operator) {
        case "+":
            addditon(a,b)
            break;        
        
        case "-":
            subtraction(a,b)
            break;

        case "*":
            multiplication(a,b)
            break;

        case "/":
            dvision(a,b)
            break;
    
        default:
            console.log("Error: unknown operator");
            break;
    }

}

calculate(4, "-", 5)
calculate(4, "*", 5)
calculate(4, "+", 5)
calculate(4, "/", 5)
calculate(4, "/", 0)
calculate(4, "d", 0)


// ========================[Task 39]========================
console.log("========================[Task 39]========================");

function pyramid(rows){

    let rowPrint = ""

    for (let i = 0; i < rows; i++) {
        rowPrint = ""
        for (let j = 0; j < (2 * i) + 1; j++) {
            rowPrint += "*";
        }
        console.log(rowPrint);
    }


}

pyramid(5)


// ========================[Task 40]========================
console.log("========================[Task 40]========================");

// function isEven(n){
//     return (n % 2 === 0);
// }

function collatz(n){
    let numberOfSteps = 0;
    console.log(n);
    for (; n !== 1; numberOfSteps++) {
        if (isEven(n)) {
            n/=2;
            console.log(n);
        } else{
            n*=3;
            n+=1;
            console.log(n);
        }
    }
    console.log("numberOfSteps: ",numberOfSteps);
    
}

collatz(2)
collatz(6)
collatz(24)

// ========================[Task 41]========================
console.log("========================[Task 41]========================");

const words = [
    "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"
  ];

function numberToWord(n){

    if (n >= 1 && n <= 20) {
        console.log(words[n]);
    } else {
        console.log("out of range")
    }


}

numberToWord(7)
numberToWord(15)
numberToWord(20)
numberToWord(25)

// ========================[Task 42]========================
console.log("========================[Task 42]========================");

let balance = 1000

function deposit(amount) {
    if (amount > 0) {
        balance+=amount;
    } else {
        console.log("ERROR: you inserted invalid amount");
    }
}

function withdraw(amount) {
    if (amount <= balance && amount > 0) {
        balance-=amount;
    } else {
        console.log("ERROR: you cant overdraw");
    }
}

function getBalance() {
    console.log("Balance: ", balance);
    
}

getBalance()
deposit(500)
getBalance()
withdraw(200)
getBalance()
withdraw(2000)
getBalance()

// ========================[Here ends the 5th Chapter]========================


