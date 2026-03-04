// ==========================
// 🔹 Practice 1: What is "with"?
// ==========================

const withExplain =
  "The 'with' statement is a JavaScript statement that extends the scope chain for a specific object. It allows you to access object properties without repeatedly writing the object name.";

/*
Example:

const person = { name: "Miraz", age: 22 };

with (person) {
  console.log(name); // instead of person.name
  console.log(age);  // instead of person.age
}

⚠ Why it is not recommended:
- Makes code confusing
- Hard to debug
- Not allowed in strict mode
- Can cause scope ambiguity
*/

// ==========================
// 🔹 Practice 2: What is eval()?
// ==========================

const evalExplain =
  "eval() is a built-in JavaScript function that executes a string as JavaScript code.";

/*
Example:

eval("console.log(2 + 3)"); // Output: 5

⚠ Why you should NOT use eval():
1. Security Risk (can execute malicious code)
2. Very slow performance
3. Hard to debug
4. Makes code unsafe and unpredictable

Because of these reasons, eval() is strongly discouraged in modern JavaScript.
*/
