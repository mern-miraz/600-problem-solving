// ==========================
// 🔹 Practice 1: TDZ with let
// ==========================
commentCount++;
let commentCount = 5;
// ❌ ReferenceError
// Explanation: Variables declared with 'let' or 'const' are hoisted but not initialized.
// Using them before declaration is called the Temporal Dead Zone (TDZ).

// ==========================
// 🔹 Practice 2: TDZ with const
// ==========================
console.log(veiws / 2);
const veiws = 10;
// ❌ ReferenceError
// Same as above: 'veiws' is in TDZ before initialization

// ==========================
// 🔹 Practice 3: What is TDZ?
// ==========================
const tdz =
  "Variables or functions are not accessible before declaration when using let/const. This period is called the Temporal Dead Zone (TDZ).";

// ==========================
// 🔹 Practice 4: Function Expressions
// ==========================
const funExp =
  "Function expressions are stored in a variable. They are not hoisted like function declarations, so using them before declaration causes an error.";

// ==========================
// 🔹 Practice 5: Hoisting with var
// ==========================
const behaveVar =
  "Variables declared with 'var' are hoisted but their value is undefined until assigned. Accessing them before assignment returns undefined.";

// ==========================
// 🔹 Practice 6: Difference between var, let, const
// ==========================
const difVarAndLet =
  "Hoisting behavior of var and let/const is different. Var is hoisted with undefined, let/const are hoisted but in TDZ.";

// ==========================
// 🔹 Practice 7: Function Hoisting
// ==========================
console.log(bigNumber(12, 58));
// Output: 58
// How it works:
// Function declarations are hoisted along with their body.
// So JS moves the function to the top internally,
// allowing you to call it before its definition.

function bigNumber(num1, num2) {
  if (num1 > num2) return num1;
  return num2;
}
