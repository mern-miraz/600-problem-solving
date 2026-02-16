// ============================================================
// 🚀 JAVASCRIPT PRACTICE: CALLBACK FUNCTIONS
// ============================================================

// Practice 1: Basic Callback Implementation
function cricket(param) {
  param();
}
function player() {
  console.log("Player name is: Miraz");
}
cricket(player);

// Practice 2: Passing an Object to a Callback
function watchKey(obj, callback) {
  const result = Object.keys(obj);
  callback(result);
}
function printObjKeys(key) {
  console.log("Here is a object key: ", key);
}
const student = { id: 5, name: "Miraz", Roll: 3 };
watchKey(student, printObjKeys);

// Practice 3: Mathematical Processing with Callbacks
function numberProcessor(digit, callback) {
  const result = digit / 5;
  callback(result);
}
function printNumber(value) {
  console.log("The number devided value is:", value);
}
numberProcessor(500, printNumber);

// Practice 4: Reusable Function Execution
function football(player) {
  player();
}
function player() {
  console.log("Football player name is: Neymar");
}
football(player);
