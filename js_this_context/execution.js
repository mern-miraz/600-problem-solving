// ==========================
// 🔹 Practice 1: What is Execution Context?
// ==========================
const execution =
  "Execution Context is the environment where JavaScript code is evaluated and executed. Every time a script runs or a function is called, a new execution context is created. It works in two phases: (1) Creation Phase and (2) Execution Phase.";

/*
Creation Phase:
- Memory is allocated for variables and functions.
- Variables are initialized with undefined.
- Function declarations are stored completely in memory.
- The value of 'this' is determined.

Execution Phase:
- Code runs line by line.
- Variables get their actual values.
- Functions are executed.
*/

// ==========================
// 🔹 Practice 2: What is Global Execution Context?
// ==========================
const globalContext =
  "The Global Execution Context is the default execution context that is created when JavaScript first starts running. It handles global variables, global functions, and built-in objects.";

/*
Why it is needed:
- It creates a global object (window in browser, global in Node.js).
- It sets the value of 'this' in the global scope.
- It stores global variables and functions in memory.
- All function execution contexts are created inside the global context.
*/
