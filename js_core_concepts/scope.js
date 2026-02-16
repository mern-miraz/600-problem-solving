// ============================================================
// 🚀 JAVASCRIPT PRACTICE: SCOPE (GLOBAL, FUNCTION, BLOCK)
// ============================================================

// Practice 1: Global Scope
let taxRate = 15;
function income(incom) {
  const result = (incom / 100) * taxRate;
  return result;
}
console.log(income(25000));

// Practice 2: Function Scope
function funScope() {
  let insideSecret = "internal secret hiding place";
}
console.log(insideSecret);

// Practice 3: Block Scope
if (true) {
  let temperature = 30;
}
console.log(temperature);

// Practice 4: Nested Function & Closure
function schoolDetails() {
  const schoolName = "Keshorhat high school";
  function displaySchoolName() {
    console.log(schoolName);
  }
  displaySchoolName();
}
schoolDetails();
