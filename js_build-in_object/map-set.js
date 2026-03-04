// ============================================================
// 🚀 JAVASCRIPT PRACTICE: SETS (UNIQUE DATA COLLECTIONS)
// ============================================================

// Practice 1: Creating a Set from an Array to remove duplicates
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumber = new Set(numbers);
console.log(uniqueNumber);

// Practice 2: Adding values to a Set
const newSet = new Set();
newSet.add(10);
newSet.add(20);
newSet.add(10);
newSet.add(30);
console.log(newSet);

// Practice 3: Deleting values from a Set
const set = new Set([10, 20, 30]);
const deleteSet = set.delete(10);
console.log(set);

// Practice 4: Converting a Set back to an Array
const newNumbers = [1, 2, 3, 4, 2, 1, 5, 5];
const uniqueNumbers = [...new Set(newNumbers)];
console.log(uniqueNumbers);
