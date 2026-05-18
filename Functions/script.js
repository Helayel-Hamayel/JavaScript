// ========================[Task 29]========================
console.log("========================[Task 29]========================");

function celsiusToFahrenheit(c){
    const covertedValue = ((c * 9/5) + 32)
    console.log(`Celsius: ${c} | Fahrenheit: ${covertedValue} `);
}

celsiusToFahrenheit(0);
celsiusToFahrenheit(100);
celsiusToFahrenheit(37);


// ========================[Task 30]========================
console.log("========================[Task 30]========================");

let numb = 7

export const isEven = (n) =>{
   return n % 2 === 0;
}
const isOdd = (n) =>{
	return !isEven(n);
}

console.log(isEven(4))
console.log(isOdd(7))
console.log(isEven(3))
console.log(isOdd(4))

// ========================[Task 31]========================
console.log("========================[Task 31]========================");

function greet(name, greeting = "hello"){
    console.log(` ${greeting}, ${name}!`)
}

greet("Omar", "Good morning")
greet("Sara")

// ========================[Task 32]========================
console.log("========================[Task 32]========================");

function maxOfThree(a, b, c){

    let maxValue = 0;
    if (a >= b && a >= c) {
        maxValue = a
    }
    else if (b >= a && b >= c) {
        maxValue = b
    }
    else {
        maxValue = c
    }
    return maxValue
}

console.log(maxOfThree(3,17,9));

// ========================[Task 33]========================
console.log("========================[Task 33]========================");

function countVowels(str){

    let counter = 0;
    for (let index = 0; index < str.length; index++) {
        let chars = str[index].toLowerCase()
        if (chars === "a" || chars === "e" || chars === "i" || chars === "o" ||  chars === "u" ) {
            counter++;
        }
        
    }
    console.log("Number of vowels found: ", counter);
}

countVowels("hello World")
countVowels("Albert Einstien")

// ========================[Task 34]========================
console.log("========================[Task 34]========================");

function factorial(n){

    let fac = 1
    for (let index = 1; index <= n; index++) {
        fac = fac * index;
        
    }    
    return fac;
}

console.log(factorial(0))
console.log(factorial(5))
console.log(factorial(7))

// ========================[Task 35]========================
console.log("========================[Task 35]========================");

function isPalindrome(str){

    str = str.toLowerCase().replaceAll(" ", "")
    for (let index = 0; index < str.length; index++) {
        let last = ((str.length-1) - index)
        // vv debugger vv
        // console.log(str[last], str[index],last)
        if (str[index] !== str[last]) {
            return false
        }
    }
    return true
}

console.log(isPalindrome("racecar"))
console.log(isPalindrome("hello"))
console.log(isPalindrome("Never Odd Or Even"))

// ========================[Here ends the 5th Chapter]========================