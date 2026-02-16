// ============================================================
// 🚀 JAVASCRIPT PRACTICE: SCENARIOS THAT RETURN UNDEFINED
// ============================================================

// Practice 1: Declaring a variable without assigning a value
let first;
console.log(first);

// Practice 2: Function without a return statement
function sum(a, b) {
  a + b;
}
console.log(sum(5, 2));

// Practice 3: Deleting an element from an array
const number = [10, 20, 30, 40, 50];
delete number[2];
console.log(number[2]);

// Practice 4: Missing function arguments (Parameters)
function sum2(a, b, c) {
  console.log(a, b, c);
}
sum2(5, 10);

// Practice 5: Accessing a non-existent object property
const student = { name: "serious sojib", roll: 1, masks: 99 };
console.log(student.marks);
