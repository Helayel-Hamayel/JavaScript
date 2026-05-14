
// Step 1

console.log("\nStep 1: "); 
let students = ["Dania", "Omar", "Lina", "Rami"];
console.log("students: ",students); 

// Step 2. add it to end of the list

console.log("\nStep 2: "); 
students.push("Sara")
console.log("students: ",students); 

// Step 3. add it to start of the list

console.log("\nStep 3: "); 
students.unshift("Adam")
console.log("students: ",students); 

//  Step 4. change an elemnt

console.log("\nStep 4: "); 
students[3] = "Lamar";
console.log("students: ",students); 


// Step 5. remove the last student
console.log("\nStep 5: "); 
let removedLast = [];
removedLast.push(students.pop())
console.log("students: ",students); 

// Step 6. remove the first student.

console.log("\nStep 6: "); 
let removedFirst = [];
removedFirst.push(students.shift())
console.log("students: ",students); 

// Step 7. check if a name exists.

console.log("\nStep 7: "); 
let hasRami = students.includes("Rami")
console.log("hasRami: ",hasRami);

// Step 8. find postion of value.

console.log("\nStep 8: "); 
let omarIndex = students.indexOf("Omar")
console.log("omarIndex: ",omarIndex);

// Step 9. take the first two elements and take them to new array

console.log("\nStep 9: "); 
let groupA = students.slice(0,2)
console.log("groupA: ",groupA);

// Step 10. combine groupA and groupB into new array

console.log("\nStep 10: "); 
let groupB = ["Nour", "Tala"]
let allGroups = groupA.concat(groupB)
console.log("allGroups: ",allGroups);

// Step 11. convert allgroups to single string with seprator

console.log("\nStep 11: "); 
let groupsString = allGroups.join(" | ")
console.log("groupsString: ",groupsString);

// Step 12. sort alphatically

console.log("\nStep 12: "); 
console.log("sorted Students: ",students.sort());

// Step 13. reverse it!

console.log("\nStep 13: "); 
console.log("sorted Students: ",students.reverse());

// Step 14. modify it with single command

console.log("\nStep 14: "); 
let seats = [1, 2, 3, 4, 5];
seats.splice(1, 3, "Reserved", "Reserved", "Reserved");
let reservedSeats = seats
console.log("reservedSeats: ",reservedSeats);

// Step 15. convert array to text

console.log("\nStep 15: "); 
let studentsString = students.join("");
console.log("studentsString: ",studentsString);

// Step 16. lol
console.log("\nStep 16: "); 
console.log("I already displayed the answers for each step");