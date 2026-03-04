# 🛒 Shopping Cart Application (JS)

A simple yet advanced **JavaScript Shopping Cart** system demonstrating product management, cart operations, and order placement using array methods and clean logic.

---

## 📌 Project Overview

This application allows users to:

- Add products to the cart
- Handle duplicate products by increasing quantity
- View cart with total per item and overall total
- Place orders with cart items
- Track orders with total price and date
- Update product stock accordingly

---

## ✅ Core Features

### 🛍 Cart Management

- Add new product to cart
- Increase quantity for existing product
- Validate stock availability
- Prevent invalid quantities (≤ 0)

### 📊 Analytics & Utilities

- View cart with item-wise total and overall cart total
- Place order and save order details
- Track order history
- Automatically clear cart after placing order

---

## 🛠 Technologies Used

- JavaScript (ES6+)
- Array Methods:
  - `find()`
  - `map()`
  - `forEach()`
- Error handling with `try...catch`

---

## 💡 Example Usage

```javascript
console.log(addToCart(2, 3));
console.log(addToCart(1, 2));
console.log(addToCart(2, 1)); // Duplicate product
viewCart();
console.log(placeOrder());
```

---

## 🎯 Learning Outcomes

- Strengthened array manipulation skills
- Practiced object handling and state management
- Learned to handle stock, quantities, and order processing
- Applied clean coding principles in functional JS

---

## 👨‍💻 Author

**Mirazul Islam**  
Aspiring JavaScript Developer 🚀

---

⭐ If you like this project, consider giving it a star!
