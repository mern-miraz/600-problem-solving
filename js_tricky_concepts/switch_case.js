// ==========================
// 🔹 Practice 1: Mobile Brand Country (switch)
// ==========================

const mobile = "Apple";

switch (mobile) {
  case "Apple":
    console.log("USA");
    break;
  case "Samsung":
    console.log("Korea");
    break;
  case "Xiaomi":
    console.log("China");
    break;
  default:
    console.log("Unknown Source");
}

// ==========================
// 🔹 Practice 2: Browser Check (if-else + switch)
// ==========================

const browser = "Chrome";

// ✅ Using if-else
if (browser === "Chrome") {
  console.log("Best for developers");
} else if (browser === "Brave") {
  console.log("Privacy focused");
} else if (browser === "Safari") {
  console.log("Apple users' choice");
} else {
  console.log("Unsupported browser");
}

// ✅ Using switch
switch (browser) {
  case "Chrome":
    console.log("Best for developers");
    break;
  case "Brave":
    console.log("Privacy focused");
    break;
  case "Safari":
    console.log("Apple users' choice");
    break;
  default:
    console.log("Unsupported browser");
}

// ==========================
// 🔹 Practice 3: Payment Method (switch)
// ==========================

const paymentMethod = "cash";

switch (paymentMethod) {
  case "cash":
    console.log("Pay with cash");
    break;
  case "credit":
    console.log("Pay with credit card");
    break;
  case "debit":
    console.log("Pay with debit card");
    break;
  default:
    console.log("Invalid payment method");
}

// ==========================
// 🔹 Practice 4: Membership (if-else)
// ==========================

const membership = "gold";

if (membership === "free") {
  console.log("Access limited content");
} else if (membership === "silver") {
  console.log("Access most content");
} else if (membership === "gold") {
  console.log("Access premium content");
} else if (membership === "platinum") {
  console.log("Full access");
} else {
  console.log("Invalid membership");
}

// ==========================
// 🔹 Practice 5: Order Status (switch)
// ==========================

const orderStatus = "pending";

switch (orderStatus) {
  case "pending":
    console.log("Your order is being processed");
    break;
  case "shipped":
    console.log("Your order is on the way");
    break;
  case "delivered":
    console.log("Your order has been delivered");
    break;
  case "cancelled":
    console.log("Your order was cancelled");
    break;
  default:
    console.log("Unknown order status");
}

// ==========================
// 🔹 Practice 6: Grade Result (switch)
// ==========================

const grade = "A";

switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  case "D":
    console.log("Poor");
    break;
  case "F":
    console.log("Fail");
    break;
  default:
    console.log("Invalid grade");
}
