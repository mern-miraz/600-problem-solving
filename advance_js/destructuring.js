// ==========================================
// JavaScript Destructuring Mastery Practice
// ==========================================

// 1. Basic Object Destructuring
const product = { name: "Laptop", price: 50000, brand: "Dell" };
const { brand } = product;
console.log(brand);

// 2. Multi-property Destructuring
const item = { name: "Mobile", price: 20000, phone: "Samsung" };
const { phone, price } = item;
console.log(`Phone: ${phone}, Price: ${price}`);

// 3. Basic Array Destructuring
const colors = ["red", "blue", "green", "yellow"];
const [colors1, colors2] = colors;
console.log(colors1, colors2);

// 4. Skipping Elements in Array
const numbers = [15, 30, 45];
const [, second] = numbers;
console.log(second);

// 5. Advanced Skipping in Array
const digits = [2, 4, 6, 8];
const [two, , , eight] = digits;
console.log(two, eight);

// 6. Destructuring from Function Returns
function multiply(a, b) {
  return [a * 3, b * 3];
}
const [first, second2] = multiply(10, 20);
console.log(first, second2);

// 7. Renaming (Alias) & Default Values
const persone = {
  name: "Rahim",
  city: "Dhaka",
};
const { name: personeName, city, phone: personePhone = "N/A" } = persone;
console.log(`Name: ${personeName}, City: ${city}, Phone: ${personePhone}`);

// 8. Object Property Alias
const teacher = {
  name: "Maria",
  profession: "Teacher",
};
const { name, profession: job } = teacher;
console.log(name, job);
