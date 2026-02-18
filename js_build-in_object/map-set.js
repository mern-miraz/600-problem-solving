// Peactice 1
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumber = new Set(numbers);
console.log(uniqueNumber);

// Peactice 2
const newSet = new Set();
newSet.add(10);
newSet.add(20);
newSet.add(10);
newSet.add(30);
console.log(newSet);

// Peactice 3
const set = new Set([10, 20, 30]);
const deleteSet = set.delete(10);
console.log(set);

// Peactice 4
const newNumbers = [1, 2, 3, 4, 2, 1, 5, 5];
const uniqueNumbers = [...new Set(newNumbers)];
console.log(uniqueNumbers);
