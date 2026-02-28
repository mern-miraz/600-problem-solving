// ==========================
// 🔹 Practice 1: What is IIFE?
// ==========================
const iife =
  "IIFE stands for Immediately Invoked Function Expression. It is a function that runs immediately after it is defined. It is mainly used to create a private scope and avoid polluting the global scope.";

/*
Why we use IIFE:
1. To create isolated/private scope
2. To avoid global variable conflicts
3. To run initialization code immediately
4. Common in older JavaScript module patterns
*/

// ==========================
// 🔹 Practice 2: Simple IIFE
// ==========================
(function () {
  console.log("I am isolated from outer scope!");
})();

// ==========================
// 🔹 Practice 3: Arrow Function IIFE
// ==========================
(() => {
  console.log("borrow from arrow");
})();

// ==========================
// 🔹 Practice 4: IIFE with Parameter (Kelvin to Celsius)
// ==========================
const kelvin = 285.51;
((temperature) => {
  const celsius = temperature - 273.15;
  console.log(`${celsius.toFixed(2)}°C`);
})(kelvin);
