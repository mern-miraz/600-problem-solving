const book = {
  name: "math",
  price: 250,
  writer: "Steven Strogatz",
};
const bookKeys = Object.keys(book);
const bookValues = Object.values(book);
console.log(bookKeys, bookValues);

const article = {
  title: "Learning JS",
  category: "Programing",
};
const articleKeys = Object.keys(article);
const hasProperty = articleKeys.includes("author");
console.log(hasProperty);

const laptop = {
  brand: "Dell",
  model: "Inspiron",
  price: 45000,
};
for (const key in laptop) {
  const value = laptop[key];
  console.log(key, value);
}

const phone = {
  brand: "Samsung",
  model: "Galaxy S21",
  price: 85000,
};
const phoneKeys = Object.keys(phone);
for (const key of phoneKeys) {
  const value = phone[key];
  console.log(key, value);
}

const bike = {
  brand: "Hero",
  price: 120000,
  model: "Splendor",
};
const bikeValue = Object.values(bike);
console.log(bikeValue);

const books = {
  book1: "Harry Potter",
  book2: "The Hobbit",
  book3: "Game of Thrones",
};
for (const key in books) {
  const value = books[key];
  console.log(value);
}

const numbers = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
};
let sum = 0;
for (const key in numbers) {
  const values = numbers[key];
  sum = sum + values;
}
console.log(sum);

const player = {
  name: "Messi",
  team: "Argentina",
  goals: 91,
};
const playerValues = Object.values(player);
console.log(playerValues);

const building = {
  floors: 10,
  address: { street: "Main Road", city: "Dhaka" },
  type: "Commercial",
};
for (const buildingKey in building) {
  const buildingValues = building[buildingKey];
  console.log(buildingKey, buildingValues);
}
