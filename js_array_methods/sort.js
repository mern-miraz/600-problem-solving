// ============================================================
// 🚀 JAVASCRIPT ARRAY SORTING: PRACTICE REVIEW
// ============================================================
// Practice 1: Sorting an array in Ascending Order (Smallest to Largest)
const number = [50, 12, 25, 8, 15];
const numberAscending = number.sort((a, b) => a - b);
console.log(numberAscending);

// Practice 2: Sorting an array in Descending Order (Largest to Smallest)
const arrayNumbers = [12, 2, 45, 9, 6];
const descending = arrayNumbers.sort((a, b) => b - a);
console.log(descending);

// Practice 3: Sorting an Array of Objects by a specific property ('age')
const friends = [
  { name: "Ali", age: 29 },
  { name: "Sara", age: 22 },
  { name: "Tariq", age: 35 },
];
const sortByAge = friends.sort((a, b) => a.age - b.age);
console.log(sortByAge);

// Practice 4: Sorting strings Alphabetically
const names = ["nabil", "zubayer", "sarwar", "delwar"];
const alphabetically = names.sort();
console.log(alphabetically);
