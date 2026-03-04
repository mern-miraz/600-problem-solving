# 🚀 Advanced Todo Application (OOP Based)

A fully featured Todo Management System built using modern **JavaScript (ES6+) Class Architecture**.

This project demonstrates strong understanding of Object-Oriented Programming, array manipulation, and clean state management.

---

## 📌 Project Overview

This application manages the full lifecycle of a task:

- Create tasks with category & duration
- Edit existing tasks
- Remove tasks
- Mark tasks as completed
- Undo completed tasks
- Calculate productivity statistics

The system uses a unique ID generation strategy to prevent duplication issues.

---

## ✅ Core Features

### 📝 Task Management

- Add new task
- Edit task
- Remove task
- Complete task
- Undo task

### 📊 Analytics

- Total completed hours
- Total remaining hours
- Largest incomplete task
- Smallest incomplete task
- Sort incomplete tasks (descending)
- Completed percentage calculation

### 📂 Filtering & Utilities

- Filter by category
- Get task by name or category
- Import tasks from JSON
- Clear all tasks safely
- Reset ID counter properly

---

## 🛠 Technologies Used

- JavaScript (ES6+)
- OOP (Class-Based Structure)
- Array Methods:
  - `find()`
  - `filter()`
  - `reduce()`
  - `sort()`
  - `findIndex()`

---

## 🧠 Project Structure

```javascript
class TodoApp {
  constructor() {
    this.todos = [];
    this.currentId = 1;
  }
}
```

The application keeps state inside the class to ensure clean architecture and scalability.

---

## 💡 Example Usage

```javascript
const app = new TodoApp();

app.addTodo("Read JavaScript Book", 2, "Study");
app.addTodo("Workout", 1, "Health");
app.addTodo("Watch Movie", 3, "Entertainment");

app.completeTodo("Read JavaScript Book");

console.log("Completed Hours:", app.hoursWorked());
console.log("Remaining Hours:", app.timeNeeded());
```

---

## 🎯 Learning Outcomes

Through this project:

- Improved understanding of OOP in JavaScript
- Practiced real-world task management logic
- Strengthened array manipulation skills
- Learned state handling inside a class
- Applied clean coding principles

---

## 🚀 Future Improvements

- LocalStorage integration
- Deadline & Priority system
- UI Version (React or Vanilla JS)
- Persistent storage system
- Soft delete with undo stack

---

## 👨‍💻 Author

**Mirazul Islam**
Aspiring JavaScript Developer 🚀

---

⭐ If you like this project, consider giving it a star!
