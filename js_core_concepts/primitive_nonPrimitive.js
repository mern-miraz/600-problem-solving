// ============================================================
// 🚀 JAVASCRIPT DATA TYPES: PRIMITIVE VS REFERENCE
// ============================================================

// Practice 1: Primitive Types (Numbers)
const num = 15;
let copy = num;
copy = 25;
console.log(num, copy);

// Practice 2: Reference Types (Arrays)
const arr = [1, 2, 3];
let arrCopy = arr;
arrCopy[0] = 88;
console.log(arr, arrCopy);

// Practice 3: Reference Types (Objects)
const language = { name: "JS", age: 30 };
let newVersion = language;
newVersion.location = "Browser";
console.log(language, newVersion);
