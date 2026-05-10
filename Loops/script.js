// ========================[Task 22]========================
console.log("========================[Task 22]========================");

let sum = 0

for (let i = 0; i <= 100; i++) {
    sum+=i;
}

console.log("The sum of 0 to 100:", sum);

// ========================[Task 23]========================
console.log("========================[Task 23]========================");

let numb = 7

for (let i = 1; i <= 10; i++) {
    console.log(`${numb} * ${i} = `, numb*i);
}


// ========================[Task 24]========================
console.log("========================[Task 24]========================");

for (let i = 1; i <= 75; i++) {
    if(i % 6 == 0 && i % 8 == 0){
         console.log(`The magical number div by 6 AND 8 is: ${i}`);
         break;
    }
}

// ========================[Task 25]========================
console.log("========================[Task 25]========================");

let output = "";
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        output += "Fizz";
    }
    if (i % 5 === 0) {
        output += "Buzz";
    }
    if(output){
        console.log(`the number ${i}: ${output}`);
        output = "";  
    }

}

console.log(output);

// ========================[Task 26]========================
console.log("========================[Task 26]========================");

let countdown = 5;
let displayCD = "";

do {
    displayCD += countdown + "... ";
    countdown--;
} while (countdown > 0);

console.log(displayCD + "Blast off!");


// ========================[Task 27]========================
console.log("========================[Task 27]========================");

for (let n = 2; n <= 50; n++) {
    let isPrime = true;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false; 
            break; 
        }
    }

    if (isPrime) {
        console.log(n);
    }
}

// ========================[Task 28]========================
console.log("========================[Task 28]========================");

let outputStars = "";

for (let i = 1; i <= 5; i++) {
    outputStars = "";
    for (let j = 1; j <= i; j++) {
        outputStars+="*";
    }
    console.log(outputStars);
}

// ========================[Here ends the Fourth Chapter]========================