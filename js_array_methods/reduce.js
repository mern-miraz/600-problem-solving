// ==========================================
// JavaScript Array Methods: reduce() Practice
// ==========================================
// Practice 1: Calculating the total sum of an array of numbers
const numbers = [5, 10, 15, 20, 25];
const sumNumber = numbers.reduce(
  (accumolator, number) => accumolator + number,
  0,
);
console.log(sumNumber);

// Practice 2: Calculating the total price from a shop's product array
const product = [
  { name: "shampo", price: 100 },
  { name: "soap", price: 50 },
  { name: "toothpaste", price: 75 },
];
const productTotalPrice = product.reduce((sum, num) => sum + num.price, 0);
console.log(productTotalPrice);

// Practice 3: Summing the prices of a specific product list
const productList = [
  { name: "Pen", price: 5 },
  { name: "Book", price: 50 },
  { name: "Bag", price: 100 },
];
const productListTotalPrice = productList.reduce(
  (sum, num) => sum + num.price,
  0,
);
console.log(productListTotalPrice);

// Practice 4: Finding the product (multiplication) of all elements
const multiply = [1, 2, 3, 4, 5];
const result = multiply.reduce((mul, num) => mul * num, 1);
console.log(result);

// Practice 5: Finding the maximum value in an array using reduce
const maxNumber = [10, 20, 30, 40, 50];
const findMaxNumber = maxNumber.reduce(
  (max, value) => (max > value ? max : value),
  0,
);
console.log(findMaxNumber);

// Practice 6: Summing an array with a custom initial value of 50
const sum50 = [100, 200, 300, 400];
const sum50Result = sum50.reduce((sum, num) => sum + num, 50);
console.log(sum50Result);
