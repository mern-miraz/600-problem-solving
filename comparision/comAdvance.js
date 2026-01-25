const myMoney = 50;
const friendMoney = "50";
console.log(myMoney == friendMoney);
console.log(myMoney === friendMoney);

const noteBook = "JavaScript";
const dataType = "JavaScript";
// Because both variable values and their data types are the same
console.log(noteBook == dataType);
console.log(noteBook === dataType);

const num1 = 25;
const num2 = "25";
// The output is true because it only checks the variable's value.
console.log(num1 == num2);
//The output is false because it checks both the variable's value and its data type.
console.log(num1 === num2);

const apple1 = "apple";
const apple2 = "apple";
console.log(apple1 == apple2);
console.log(apple1 === apple2);

const test1 = "test";
const test2 = "TEST";
console.log(test1 == test2);
console.log(test1 === test2);

const variableX = 15;
const variableY = "20";
console.log(variableX != variableY);
console.log(variableX !== variableY);

const variableA = "hello";
const variableB = "Hello";
console.log(variableA == variableB);
console.log(variableA === variableB);
