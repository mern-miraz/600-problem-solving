// ======================================
// Todo.js - Final Improved Version
// ======================================

class TodoApp {
  constructor() {
    this.todos = [];
    this.currentId = 1; // Prevent duplicate ID issue
  }

  // ---------------- ADD TODO ----------------
  addTodo(taskName, duration, category) {
    const newTask = {
      id: this.currentId++, // Unique ID
      taskName,
      duration: Number(duration), // Ensure number
      category,
      completed: false,
    };

    this.todos.push(newTask);
    return true;
  }

  // ---------------- COMPLETE TODO ----------------
  completeTodo(taskName) {
    const task = this.todos.find((t) => t.taskName === taskName);
    if (!task) return false;

    task.completed = true;
    return true;
  }

  // ---------------- REMOVE TODO ----------------
  removeTodo(taskName) {
    const index = this.todos.findIndex((t) => t.taskName === taskName);
    if (index === -1) return false;

    this.todos.splice(index, 1);
    return true;
  }

  // ---------------- DISPLAY TODO LIST ----------------
  displayTodoList(categoryName) {
    if (!categoryName) {
      console.log(this.todos);
      return this.todos;
    }

    const filtered = this.todos.filter((t) => t.category === categoryName);
    console.log(filtered);
    return filtered;
  }

  // ---------------- TOTAL COMPLETED HOURS ----------------
  hoursWorked() {
    return this.todos
      .filter((t) => t.completed)
      .reduce((sum, t) => sum + t.duration, 0);
  }

  // ---------------- TOTAL REMAINING HOURS ----------------
  timeNeeded() {
    return this.todos
      .filter((t) => !t.completed)
      .reduce((sum, t) => sum + t.duration, 0);
  }

  // ---------------- EDIT TODO ----------------
  editTodo(taskName, updateObj = {}) {
    const task = this.todos.find((t) => t.taskName === taskName);
    if (!task) return false;

    let updated = false;

    if (updateObj.name !== undefined) {
      task.taskName = updateObj.name;
      updated = true;
    }

    if (updateObj.category !== undefined) {
      task.category = updateObj.category;
      updated = true;
    }

    if (updateObj.duration !== undefined) {
      task.duration = Number(updateObj.duration);
      updated = true;
    }

    return updated;
  }

  // ---------------- GET TODO ----------------
  getTodo(value) {
    return this.todos.find((t) => t.taskName === value || t.category === value);
  }

  // ---------------- LARGEST INCOMPLETE TODO ----------------
  largestTodo() {
    const incomplete = this.todos.filter((t) => !t.completed);
    if (incomplete.length === 0) return undefined;

    return incomplete.reduce((max, task) =>
      task.duration > max.duration ? task : max,
    );
  }

  // ---------------- SMALLEST INCOMPLETE TODO ----------------
  smallestTodo() {
    const incomplete = this.todos.filter((t) => !t.completed);
    if (incomplete.length === 0) return undefined;

    return incomplete.reduce((min, task) =>
      task.duration < min.duration ? task : min,
    );
  }

  // ---------------- SORT INCOMPLETE TODOS (DESC) ----------------
  sortTodos() {
    return this.todos
      .filter((t) => !t.completed)
      .sort((a, b) => b.duration - a.duration);
  }

  // ---------------- UNDO TODO ----------------
  undoTodo(taskName) {
    const task = this.todos.find((t) => t.taskName === taskName);
    if (!task) return false;

    if (task.completed) {
      task.completed = false;
      return true;
    }

    return false;
  }

  // ---------------- COMPLETED PERCENTAGE ----------------
  completedPercentage() {
    if (this.todos.length === 0) return "0%";

    const completedCount = this.todos.filter((t) => t.completed).length;
    const percent = (completedCount / this.todos.length) * 100;

    return `${percent.toFixed(2)}%`;
  }

  // ---------------- IMPORT TODOS ----------------
  importTodos(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);

      if (!Array.isArray(parsed)) return false;

      parsed.forEach((task) => {
        this.todos.push({
          id: this.currentId++,
          taskName: task.taskName,
          duration: Number(task.duration),
          category: task.category,
          completed: task.completed || false,
        });
      });

      return true;
    } catch {
      return false;
    }
  }

  // ---------------- CLEAR ALL TODOS ----------------
  clearAllTodos() {
    this.todos = [];
    this.currentId = 1;
    return true;
  }
}

// ======================================
// Example Usage (Testing)
// ======================================

const app = new TodoApp();

app.addTodo("Read JavaScript Book", 2, "Study");
app.addTodo("Workout", 1, "Health");
app.addTodo("Watch Movie", 3, "Entertainment");

app.completeTodo("Read JavaScript Book");

console.log("Completed Hours:", app.hoursWorked());
console.log("Remaining Hours:", app.timeNeeded());
console.log("Largest Todo:", app.largestTodo());
console.log("Smallest Todo:", app.smallestTodo());
console.log("Sorted Todos:", app.sortTodos());
console.log("Completed %:", app.completedPercentage());
