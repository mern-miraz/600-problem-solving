// Practice 1: Method borrowing using `this`
const laptop = {
  brand: "Dell",
  getBrand() {
    console.log(this.brand);
  },
};

const mobile = {
  brand: "Apple",
};
mobile.getBrand = laptop.getBrand;
mobile.getBrand();

// Practice 2: Explanation of `this` keyword
const thisDeclare =
  "`this` is a special keyword in JavaScript that refers to the object which is currently calling the function or method, and its value depends on the execution context.";

// Practice 3: Using `this` inside an object method
const manager = {
  tasks: [],

  // Here, `this` refers to the manager object itself
  assignWork(task) {
    this.tasks.push(task);
  },
};

manager.assignWork("Develop the screenshot button in question section");
manager.assignWork("Develop the lock button in home");
console.log(manager.tasks);
