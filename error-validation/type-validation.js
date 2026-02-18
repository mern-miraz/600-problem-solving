// ============================================================
// 🛠️ JAVASCRIPT PRACTICE: VALIDATION & DATA HANDLING
// ============================================================

// Practice 1: Extracting the first letter of a name
function getFirstLetter(letter) {
  if (/\d/.test(letter)) {
    return "Provided name should be a string";
  }
  if (typeof letter !== "string") {
    return "Please provide a string";
  }
  return letter[0];
}
console.log(getFirstLetter("Miraz"));

// Practice 2: Getting the last element of an array
function getLastElement(element) {
  if (Array.isArray(element) === false) return "Please provide an array";
  if (element.length === 0) return "Array is empty";
  const lastIndex = element.length - 1;
  return element[lastIndex];
}
console.log(getLastElement([10, 20, 90, 80]));

// Practice 3: Calculating Rectangle Area
function getArea(length, width) {
  if (typeof length !== "number" || typeof width !== "number") {
    return "Please provide a number";
  }
  return length * width;
}
console.log(getArea(15, 5));
