# 💰 Mini Financial System (MFS)

A simple **JavaScript-based financial system** demonstrating user management, account operations, and secure money transfers with processing fees. Built using **IIFE pattern** and clean functional modular structure.

---

## 📌 Project Overview

This application simulates a mini financial system (MFS) with the following features:

- Register users with a secure 4-digit PIN
- User login authentication
- Add funds to account
- Check account balance
- Send money to another user with a processing fee
- Maintain transaction history
- Track total processing fees collected

---

## ✅ Core Features

### 👤 User Management

- Register new users
- Validate unique user and PIN format
- User login verification

### 💵 Account Operations

- Add money to user's account
- Check account balance
- Send money between users with fixed fee (e.g., 15 units)
- Validate sufficient balance and recipient existence

### 📊 Transaction Management

- Automatic transaction recording for every operation
- View transaction history
- Track total processing fees collected by the system

---

## 🛠 Technologies Used

- JavaScript (ES6+)
- Array methods: `find()`, `push()`
- Error handling with `try...catch`
- IIFE (Immediately Invoked Function Expression) for encapsulation

---

## 💡 Example Usage

```javascript
// Register users
userData.registerUser("Miraz", 1234);
userData.registerUser("Shakib", 1235);

// Add money to account
userData.addMoney("Miraz", 1234, 500);

// Check balances
userData.checkBalance("Miraz", 1234); // 500

// Send money with processing fee
userData.sendMoney("Miraz", 1234, "Shakib", 480);

// Check balances after transfer
userData.checkBalance("Miraz", 1234); // 5
userData.checkBalance("Shakib", 1235); // 480

// View transactions
userData.viewTransactionHistory();

// View total fees collected
userData.getProcessingFee();
```

---

## 🎯 Learning Outcomes

- Implemented secure user registration & login
- Managed account balances and transactions
- Applied error handling for invalid operations
- Learned transaction recording and fee management
- Practiced modular JavaScript design using IIFE

---

## 👨‍💻 Author

**Mirazul Islam**  
Aspiring JavaScript Developer 🚀

---

⭐ If you like this project, consider giving it a star!
