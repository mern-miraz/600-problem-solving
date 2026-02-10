// ============================================================
// 🚀 JAVASCRIPT STRING CASE & VALIDATION PRACTICE
// ============================================================

// Practice 1: Converting an email to lowercase
const email = "User@Example.Com";
const lower = email.toLowerCase();
console.log(lower);

// Practice 2: Full case transformation
const greeting = "hELLo WoRLD";
const greetToLowerCase = greeting.toLowerCase();
const greetToUpperCase = greeting.toUpperCase();
console.log(greetToLowerCase);
console.log(greetToUpperCase);

// Practice 3: Case-insensitive search
const language = "JavaScript";
const check = language.toLowerCase().includes("script");
console.log(check);

// Practice 4: Checking for uppercase first characters
const text = "NodeJs";
const firstLeter = text[0] === text[0].toUpperCase();
console.log(firstLeter);
