console.log("========================[Task 1.1]========================");

function yesOrNo(value) {
  return value ? "yes" : "no";
}

console.log(yesOrNo(true));
console.log(yesOrNo(false));

console.log("========================[Task 2.1]========================");

function sumLowOfTwo(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  console.log(
    `The lowest two values are: ${array[0]} and ${array[1]} => ${array[0] + array[1]}`,
  );
}

const arr = [19, 5, 42, 2, 77];
const arr2 = [42, 187, 563, 92, 714, 335, 841];
const arr3 = [15, 622, 904, 248, 473, 811, 56, 399];

sumLowOfTwo(arr);
sumLowOfTwo(arr2);
sumLowOfTwo(arr3);

console.log("========================[Task 2.2]========================");

function binaryToInteger(binaryArray) {
  let intgConv = 0;
  const mul = binaryArray.length - 1;
  for (let index = mul; 0 <= index; index--) {
    intgConv += Math.pow(2, mul - index) * binaryArray[index];
  }
  console.log(`${binaryArray} => ${intgConv}`);
}

console.log(`Converting Binary to Integer:`);
const binArrr = [0, 0, 0, 0]; // -> 0
const binArrr2 = [0, 0, 1, 0]; // -> 2
const binArrr3 = [0, 1, 0, 0]; // -> 4
const binArrr4 = [1, 0, 0, 0]; // -> 8
const binArrr5 = [1, 0, 0, 1]; // -> 9
const binArrr6 = [1, 1, 0, 1]; // -> 13
const binArrr7 = [1, 0, 0, 0, 0]; // -> 16
const binArrr8 = [0, 1, 1, 0, 1, 0, 1, 0, 0]; // -> 212

binaryToInteger(binArrr);
binaryToInteger(binArrr2);
binaryToInteger(binArrr3);
binaryToInteger(binArrr4);
binaryToInteger(binArrr5);
binaryToInteger(binArrr6);
binaryToInteger(binArrr7);
binaryToInteger(binArrr8);

console.log("========================[Task 2.3]========================");

function findNextSquare(value) {
  const root = Math.sqrt(value);
  if (root % 1 === 0) {
    console.log(`${value} => ${Math.pow(root + 1, 2)}`);
  } else {
    console.log(
      `sorry the root value of ${value} has remainder, its not perfect`,
    );
  }
}

console.log("Looking for Perfect Square!:");
findNextSquare(121);
findNextSquare(625);
findNextSquare(114);
findNextSquare(400);
findNextSquare(100);
findNextSquare(0);
findNextSquare(99);

console.log("========================[Task 2.4]========================");

function findUnique(array) {
  const arrLen = array.length - 1;
  array.sort(function (a, b) {
    return a - b;
  });

  if (array[arrLen] === array[arrLen - 1]) {
    console.log(`${array} => ${array[0]}`);
  } else {
    console.log(`${array} => ${array[arrLen]}`);
  }
}

console.log("Looking for Unique value in array");
findUnique([0, 0, 0, 0, 1]); // 1
findUnique([1, 1, 1, 0, 1]); // 0
findUnique([0, 0, 0.5, 0, 0]); // 0.5
findUnique([55, 2, 2, 2, 2]); // 55

console.log("========================[Task 2.5]========================");

function summation(value) {
  if (value > 0) {
    let sumVal = 0;
    for (let index = 1; index <= value; index++) {
      sumVal += index;
    }
    console.log(`Sum of ${value} : ${sumVal}`);
  } else {
    console.log(`Sum of 0 : 0`);
  }
}

console.log("Summation!");

summation(0);
summation(5);
summation(8);
summation(12);

console.log("========================[Task 2.6]========================");

function centuryFromYear(year) {
  console.log(`The Year ${year} is a ${Math.ceil(year / 100)}th century`);
}

centuryFromYear(1705);
centuryFromYear(1900);
centuryFromYear(1601);
centuryFromYear(2000);
centuryFromYear(2026);
centuryFromYear(2126);
centuryFromYear(101);
centuryFromYear(100);
centuryFromYear(99);

console.log("========================[Task 2.7]========================");

function basicOp(operation, value1, value2) {
  let res = 0;
  switch (operation) {
    case "+":
      res = value1 + value2;
      break;

    case "-":
      res = value1 - value2;
      break;

    case "*":
      res = value1 * value2;
      break;

    case "/":
      res = value1 / value2;
      break;
  }

  console.log(`${value1}${operation}${value2} = ${res}`);
}

basicOp("+", 4, 7);
basicOp("-", 15, 18);
basicOp("*", 5, 5);
basicOp("/", 49, 7);

console.log("========================[Task 3.1]========================");

function nb_year(p0, percent, aug, p) {
  let noOfYear = 0;
  for (; p0 <= p; noOfYear++) {
    p0 += p0 * (percent / 100) + aug;
  }
  console.log(`Years it took to reach ${noOfYear}`);
}

nb_year(1000, 2, 50, 1200);
nb_year(1500, 5, 100, 5000);
nb_year(1500000, 2.5, 10000, 2000000);

console.log("========================[Task 3.2]========================");

function bus(busStations) {
  let noOfPass = 0;
  for (let index = 0; index < busStations.length; index++) {
    noOfPass += busStations[index][0] - busStations[index][1];
    if (noOfPass < 0) {
      noOfPass = 0;
    }
  }
  console.log(`${noOfPass} gona sleep tonight at last bust station :D`);
}

const busStops = [
  [10, 0],
  [3, 5],
  [5, 8],
  [10, 2],
];
const busStops2 = [
  [5, 0],
  [2, 3],
  [1, 7],
  [4, 1],
];

bus(busStops);
bus(busStops2);

console.log("========================[Task 4.1]========================");

function printFibonacci(val) {
  let val_1st = 0;
  let val_2nd = 1;
  let temp;
  const arrayPrint = [];

  for (let index = 0; index <= val; index++) {
    arrayPrint.push(val_1st + val_2nd);

    temp = val_1st;
    val_1st = val_1st + val_2nd;
    val_2nd = temp;
  }

  console.log(`Printing ${val} iterations:`, arrayPrint);
}

printFibonacci(4);
printFibonacci(14);
printFibonacci(23);

console.log("========================[Task 4.2]========================");

function printTribonacci(val) {
  let val_1st = 1;
  let val_2nd = 1;
  let val_3rd = 1;
  const arrayPrint = [];

  for (let index = 0; index <= val; index++) {
    arrayPrint.push(val_1st);

    let nextSum = val_1st + val_2nd + val_3rd;

    val_1st = val_2nd;
    val_2nd = val_3rd;
    val_3rd = nextSum;
  }

  console.log(`Printing ${val} iterations:`, arrayPrint);
}

printTribonacci(4);
printTribonacci(14);
printTribonacci(23);

console.log("========================[Task 5.1]========================");

function trimString(str) {
  console.log(`Original: ${str}, Trimmed: ${str.slice(1).slice(0, -1)}`);
}

trimString("HelloWorld");

console.log("========================[Task 5.2]========================");

function repeatStr(val, str) {
  let strPrint = "";
  for (let index = 0; index < val; index++) {
    strPrint += str;
  }
  return strPrint;
}

console.log(repeatStr(6, "L"));
console.log(repeatStr(3, "Hello"));

console.log("========================[Task 5.3]========================");

function toCamelCase(str) {
  let targetLetter = str.includes("-") ? "-" : str.includes("_") ? "_" : false;

  if (!targetLetter) {
    return;
  }

  while (true) {
    let index = str.indexOf(targetLetter);

    if (index === -1) {
      break;
    }

    str =
      str.slice(0, index) + str[index + 1].toUpperCase() + str.slice(index + 2);
  }

  console.log(str);
}

toCamelCase("the-stealth-warrior");
toCamelCase("The_Stealth_Warrior");

console.log("========================[Task 5.4]========================");

function toWeirdCase(str) {
  let wordIndex = 0;

  for (let index = 0; index < str.length; index++) {
    if (str[index] === " ") {
      wordIndex = 0;
      continue;
    }

    let newChar =
      wordIndex % 2 === 0 ? str[index].toUpperCase() : str[index].toLowerCase();

    str = str.slice(0, index) + newChar + str.slice(index + 1);
    wordIndex++;
  }

  console.log(str);
}

toWeirdCase("String");
toWeirdCase("Weird string case");

console.log("========================[Task 5.5]========================");

function abbreviateTwoWords(str) {
  let wordList = str.split(" ");
  let abbrv = wordList[0][0] + "." + wordList[1][0];
  console.log(abbrv);
}

abbreviateTwoWords("Sam Harris");
abbreviateTwoWords("Patrick Feeney");

console.log("========================[Task 5.6]========================");

function maskify(str) {
  if (str.length <= 4) {
    console.log("Sting is too short to mask: ", str);
    return;
  }

  let last4Index = str.length - 4;
  let unmaskedStr = str.slice(last4Index);
  let maskedStr = "";
  maskedStr = repeatStr(last4Index, "#");

  const maskedStrFinal = maskedStr + unmaskedStr;
  console.log(`Original: ${str}, Masked: ${maskedStrFinal}`);
}

maskify("4556364607935616");
maskify("Skippy");
maskify("Nananananananananananananananana Batman!");
maskify("64607935616");
maskify("1");
maskify("");

console.log("========================[Task 5.7 + 5.8]========================");

function longestNShortestWords(strArr) {
  let shortestWord = strArr[0];
  let longestWord = strArr[0];

  for (let index = 0; index < strArr.length; index++) {
    if (strArr.length > longestWord.length) {
      longestWord = strArr[index];
    }
    if (strArr.length < shortestWord.length) {
      shortestWord = strArr[index];
    }
  }
  console.log(
    `Longest Word lenght is ${longestWord.length}, and Shortest Word Lenght is ${shortestWord.length}`,
  );
}

const mixedStrings = [
  "Hi",
  "This is a very long stringstring",
  "Ok",
  "Short",
  "Another long one",
];

longestNShortestWords(mixedStrings);