// ==========================
// 🔹 Practice: Why use "use strict"?
// ==========================
const strict =
  "'use strict' is a directive in JavaScript that enables strict mode. It helps catch common coding mistakes and unsafe actions, making your code more secure and predictable.";

/*
Benefits of 'use strict':

1. **Variable Declaration Enforcement**
   - Without strict mode: JS automatically creates global variables if you forget 'let', 'const', or 'var'
   - With strict mode: Assigning a value to an undeclared variable throws a ReferenceError

2. **Catches Duplicate Parameters**
   - Function parameters with the same name (e.g., function(a, a)) are allowed normally
   - In strict mode, it throws a SyntaxError

3. **Safer 'this'**
   - Normally, calling a function sets 'this' to the global object (window in browsers)
   - In strict mode, 'this' inside a function that is called normally is undefined

4. **Prevents Accidental Deletions**
   - Cannot delete variables, functions, or arguments

5. **Disallows Some Reserved Keywords**
   - Using future reserved keywords (like 'implements', 'interface') throws error

Example:

'use strict';
function test() {
  undeclaredVar = 5; // ❌ ReferenceError
}
test();
*/
