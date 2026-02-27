// ==========================
// 🔹 Practice 1: What is Closure?
// ==========================

// Closure definition:
// A closure is when a function can access variables
// from its outer (parent) scope even after the outer function has finished execution.

const closure =
  "A closure is a function that remembers and can access its outer scope variables even after the outer function has executed.";

// ==========================
// 🔹 Practice 2: fridgeTracker()
// Each person has their own private counter
// ==========================

function fridgeTracker() {
  let count = 0;

  return function () {
    count++;
    console.log(`Fridge opened ${count} times`);
    return count;
  };
}

const sakib = fridgeTracker();
const habib = fridgeTracker();
const naim = fridgeTracker();

sakib(); // 1
sakib();

habib();
naim();

// ==========================
// 🔹 Practice 3: taskTracker()
// Each person has separate task counter
// ==========================

function taskTracker() {
  let count = 0;

  return function () {
    count++;
    console.log(`Tasks completed: ${count}`);
    return count;
  };
}

const mirazTask = taskTracker();
const friendTask = taskTracker();

mirazTask();
mirazTask();

friendTask();
