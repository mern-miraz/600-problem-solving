// ==========================================
// JavaScript Spread & Rest Operator Practice
// ==========================================

// 1. Adding a new element to the beginning of an array using Spread Operator
const technologies = ["Condition", "array", "loop"];
const varName = ["Variable", ...technologies];
console.log(varName);

// 2. Adding multiple elements to the end of an existing array
const fruits = ["Apple", "Banana", "Mango"];
const myFruits = [...fruits, "papaya", "orange"];
console.log(myFruits);

// 3. Merging multiple arrays into a single combined array
const frontEnd = ["JavaScript"];
const backEnd = ["Node.js"];
const database = ["MongoDB"];
const fullStack = [...frontEnd, ...backEnd, ...database];
console.log(fullStack);

// 4. Adding a new property to an object while keeping existing data
const website = { name: "MySite", type: "e-commerce", status: "active" };
const addNewPropert = { ...website, theme: "dark" };
console.log(addNewPropert);

// 5. Using Rest Operator to exclude a specific property from an object
const young = { name: "Arif", age: 30, country: "B Baria" };
const { country, ...rest } = young;
console.log(rest);

// 6. Updating an existing property value in an object using Spread Operator
const car = { make: "Toyota", model: "Corolla", year: 2020 };
const updateCar = { ...car, year: 2032 };
console.log(updateCar);
