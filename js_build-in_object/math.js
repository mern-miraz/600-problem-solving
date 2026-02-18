// ============================================================
// 🚀 JAVASCRIPT MATH OBJECT PRACTICE
// ============================================================

// Practice 1: Finding the minimum value in a set of numbers
const digits = [45, 11, 89, 23, 56, -12, -56];
console.log(Math.min(...digits));

// Practice 2: Finding the maximum value
const digits2 = [21, 35, 67];
console.log(Math.max(...digits2));

// Practice 3: Rounding to the nearest integer
console.log(Math.round(7.6));
console.log(Math.round(7.2));

// Practice 4: Rounding down using Math.floor()
console.log(Math.floor(9.8));
console.log(Math.floor(5.3));

// Practice 5: Rounding up using Math.ceil()
console.log(Math.ceil(3.1));
console.log(Math.ceil(6.9));

// Practice 6: Getting the Absolute value
console.log(Math.abs(-34));

// Practice 7: Creating a rounding utility function
function getNum(num) {
  console.log(Math.round(num));
  console.log(Math.floor(num));
  console.log(Math.ceil(num));
}
getNum(9.7);
