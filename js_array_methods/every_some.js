// ==========================================
// JavaScript Array Methods: some() and every()
// ==========================================
// Practice 1: Check if any number in the array is 100 or greater
const number = [90, 50, 60, 40, 80, 20, 100];
const result = number.some((num) => num >= 100);
console.log(result);

// Practice 2: Check if every number in the array is divisible by 5
const numArray = [60, 40, 48, 24, 34, 65];
const numArrayResult = numArray.every((num) => num % 5 === 0);
console.log(numArrayResult);

// Practice 3: Check if at least one word in the array matches "hello"
const words = ["book", "pen", "note book"];
const wel = "hello";
const checkWords = words.some((word) => word.length === wel.length);
console.log(checkWords);

// Practice 4: Check if everyone in the 'ages' array is 18 or older
const ages = [23, 18, 19, 20, 26, 24];
const checkAge = ages.every((age) => age >= 18);
console.log(checkAge);
