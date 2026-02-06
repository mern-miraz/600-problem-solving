// ================================
// Practice Number 1 ---
// Topic: Default Parameters with Numbers (Basic)
// ================================
function sum3(num1 = 0, num2 = 0, num3 = 0) {
  console.log(num1, num2, num3);
  return num1 + num2 + num3;
}
console.log(sum3(15, 3, 2));
console.log(sum3());

// ================================
// Practice Number 2 ---
// Topic: Default Parameter with Single Value
// ================================
function moneyAdd(money = 50) {
  return money;
}
console.log(moneyAdd());
console.log(moneyAdd(150));

// ================================
// Practice Number 3 ---
// Topic: Default Parameters with Object Return (Shorthand Property)
// ================================
function monthlyIncome(name = "", income = 0) {
  return { name, income };
}
console.log(monthlyIncome());
console.log(monthlyIncome("Miraz", 150000));

// ================================
// Practice Number 4 ---
// Topic: Default Parameters with Math Operation
// ================================
function square(numbers = 1) {
  return numbers * numbers;
}
console.log(square());
console.log(square(15));

// ================================
// Practice Number 5 ---
// Topic: Default Parameters with Object
// ================================
function product(name = "Unknown product", price = 1) {
  return { name, price };
}
console.log(product());
console.log(product("Mobile", 50));

// ================================
// Practice Number 6 ---
// Topic: Default Parameters with Array
// ================================
function favBook(book = ["JS Book"]) {
  return book;
}
console.log(favBook(["bangla", "english", "math"]));
console.log(favBook());

// ================================
// Practice Number 7 ---
// Topic: Default Parameters with Object + Calculation
// ================================
function productPrice(product = { price: 10, quantity: 1 }) {
  const totalPrice = product.price * product.quantity;
  return totalPrice;
}
console.log(productPrice());
console.log(productPrice({ price: 50, quantity: 5 }));

// ================================
// Practice Number 8 ---
// Topic: Default Parameters with Array + Loop + Condition
// ================================
function numberArray(numbers = [5, 10, 15]) {
  const multipleArray = [];

  // Default array থাকলে সেটাই রিটার্ন
  if (
    numbers.length === 3 &&
    numbers[0] === 5 &&
    numbers[1] === 10 &&
    numbers[2] === 15
  ) {
    return numbers;
  }

  // অন্য array হলে প্রতিটা সংখ্যাকে 2 দিয়ে গুণ
  for (const number of numbers) {
    const result = number * 2;
    multipleArray.push(result);
  }
  return multipleArray;
}
console.log(numberArray());
console.log(numberArray([50, 40, 30, 20]));

// ================================
// Practice Number 9 ---
// Topic: Default Parameters with Object (Simple Interest)
// ================================
function college(name = { principal: 1000, rate: 5 }) {
  const simpleInterest = (name.principal * name.rate) / 100;
  return simpleInterest;
}
console.log(college());
console.log(college({ principal: 1500, rate: 10 }));

// ================================
// Practice Number 10 ---
// Topic: Default Parameters with Object (Salary Calculation)
// ================================
function monthlySalary(income = { salary: 50000, tax: 10 }) {
  const taxResult = (income.salary * income.tax) / 100;
  const netSalary = income.salary - taxResult;
  return netSalary;
}
console.log(monthlySalary());
console.log(monthlySalary({ salary: 100000, tax: 18 }));
