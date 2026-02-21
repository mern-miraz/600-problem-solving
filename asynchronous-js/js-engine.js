// ===============================
// Practice 1: How JavaScript Runs
// ===============================
const runJS =
  "JavaScript runs on the V8 engine, which is an open-source engine developed by Google. It executes JavaScript and WebAssembly code. The V8 engine is written in C++, which helps it run very fast. V8 first parses the JavaScript code and understands its structure. Then the code is sent to the interpreter, and after that to the JIT (Just-In-Time) compiler. The JIT compiler converts parts of the code into machine code, which runs faster and produces the final output.";

// ===============================
// Practice 2: What is JavaScript?
// ===============================
const whatIsJS =
  "JavaScript is a multi-paradigm programming language. This means it supports procedural programming, object-oriented programming (OOP), and functional programming. It is also prototype-based and dynamically typed.";

// ===============================
// Practice 3: JIT Compilation Flow
// ===============================
/*
JavaScript Code
      ↓
Parsing (Syntax Analysis)
      ↓
Abstract Syntax Tree (AST)
      ↓
Interpreter (Bytecode Generation)
      ↓
Profiling / Optimization
      ↓
JIT Compiler (TurboFan in V8)
      ↓
Machine Code
      ↓
Output
*/

// ===============================
// Practice 4: Memory & Garbage Collection
// ===============================
const jsMemoryAndGarbage =
  "JavaScript memory management works automatically. It allocates memory when variables and objects are created and frees memory when they are no longer needed. Garbage collection removes unused objects from memory to prevent memory leaks";
