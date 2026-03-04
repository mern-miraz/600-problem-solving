🍔 Food Delivery App (JavaScript)

A complete Food Delivery Application built with JavaScript that handles: - Fetching food prices - Placing orders - Applying discount codes - Tracking orders - Submitting validated reviews - Calculating total sales per restaurant

Everything is handled using simple arrays and objects for simulation.

📌 Project Overview

This project demonstrates: - Fetching food prices from restaurants - Placing orders with optional discount codes - Calculating total sales per restaurant - Submitting reviews with validation - Handling sample data in arrays (restaurants, orders, reviews) - Simple order & review management logic

✅ Features

🛒 Order Management - Place an order from a restaurant - Apply discount codes: - SAVE10 → 10% off - WELCOME15 → 15% off - Track order status - Calculate total sales for a restaurant - View current orders

🍕 Menu & Pricing - getFoodPrice(restaurantName, foodName) → Returns price of a food item - Restaurants are stored in an array of objects with menu items - Menu items have name and price

✍️ Review System - Submit a review for a specific order: - submitReview(orderId, restaurantName, rating, reviewText) - Validations: - Order must exist - Rating between 0 and 5 - Review length ≥ 20 characters - Reviews stored in an array

📊 Analytics - getTotalSales(restaurantName) → Returns total sales of a restaurant - Track orders & calculate revenue - Discounts applied before calculating totals

📂 Data Structure - Restaurants array with menu items - Orders array for tracking placed orders - Reviews array for submitted reviews - Discount codes object

🛠 Technologies Used - JavaScript (ES6+) - Array methods: find(), filter(), map(), reduce() - Objects and arrays for simple database simulation

🎯 Learning Outcomes - Understand food order management logic - Work with arrays & objects for real-world simulation - Implement discount calculations - Validate user input (orders & reviews) - Track revenue & sales per restaurant

👨‍💻 Author
Mirazul Islam
Aspiring JavaScript Developer 🚀

⭐ If you like this project, consider giving it a star!
