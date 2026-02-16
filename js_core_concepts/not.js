// ============================================================
// 🚀 JAVASCRIPT PRACTICE: TRUTHY AND FALSY VALUES
// ============================================================

// Practice 1: Checking the boolean 'false'
if (!!false) {
  console.log("false is truthly value");
} else {
  console.log("false is falsy value");
}

// Practice 2: Checking an empty object {}
const empty = {};
if (empty) {
  console.log("empty object is truthyly value");
} else {
  console.log("empty object is falsy value");
}

// Practice 3: Checking an empty array []
const emptyArr = [];
if (emptyArr) {
  console.log("empty array is truthyly value");
} else {
  console.log("empty array is falsy value");
}

// Practice 4: Using the Double Bang (!!) operator
const arr = [];
if (!!arr) {
  console.log("empty array is truthyly value");
} else {
  console.log("empty array is falsy value");
}
