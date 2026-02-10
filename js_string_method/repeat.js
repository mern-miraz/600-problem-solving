// ==========================================
// JAVASCRIPT STRING METHODS: REPEAT & REPLACE
// ==========================================

// Practice 1: Repeating a string multiple times
const str = "Hi";
const repeated = str.repeat(10);
console.log(repeated);

// Practice 2: Replacing the first occurrence of a substring
const jsLover = "I am learning JavaScript. JavaScript is amzing!";
const replaceValue = jsLover.replace("JavaScript", "JS");
console.log(replaceValue);

// Practice 3: Replacing all occurrences of a substring
const fruitsLover = "I love apples and apples are tasty!";
const replaceFruits = fruitsLover.replaceAll("apples", "mangoes");
console.log(replaceFruits);
