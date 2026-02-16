// ============================================================
// 🚀 JAVASCRIPT PRACTICE: EQUALITY AND TYPE CONVERSION
// ============================================================

// Practice 1: Double Equal (==) with Booleans and Numbers
if (true == 1) {
  console.log("same");
} else {
  console.log("different");
}

// Practice 2: Triple Equal (===) with Separate Objects
const obj1 = {};
const obj2 = {};
console.log(obj1 === obj2);

// Practice 3: Equality by Reference
const arr1 = [1, 2, 3];
const copyArr1 = arr1;
console.log(arr1 === copyArr1);

// Practice 4: Function for Loose Equality
function checkEqual(number, bolean) {
  return number == bolean;
}
console.log(checkEqual(15, true));

// Practice 5: Empty String vs False
const str = "";
console.log(str == false);

// Practice 6: Null vs Undefined (Strict Equality)
const nul = null;
const unDefine = undefined;
console.log(nul === undefined);

// Practice 7: Type Coercion Explanation
console.log(1 == "1");
const typeConvercion =
  "When using ==, JavaScript first checks if the values have the same type. If they don’t, it converts one value (usually to a number) and then compares them.";
