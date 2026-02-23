// Practice 1
const arr1 = [{ id: 1, name: "mukta", address: "mirpur" }];
console.log(arr1[0].address);

// Practice 2
const library = {
  name: "city library",
  books: [
    { id: 1, title: "JavaScript Basics", price: 300 },
    { id: 2, title: "Python Essentials", price: 500 },
  ],
};
console.log(library.books[1].price);

// Practice 3
const school = {
  name: "Green High",
  students: [
    { id: 1, name: "Samiha" },
    { id: 2, name: "Kamal" },
  ],
};
console.log(school.students[0].name);

// Practice 4
const shop = {
  items: [
    { name: "pen", stock: 100 },
    { name: "notebook", stock: 50 },
  ],
};
console.log(shop.items[1].stock);

// Practice 5
const movie = {
  title: "Inception",
  director: { name: "Nolan", age: 50 },
  rating: 8.8,
};
console.log(movie.director.name);

// Practice 6
const game = {
  name: "football",
  players: [
    { id: 1, name: "Lionel Messi" },
    { id: 2, name: "Cristiano Ronaldo" },
  ],
};
console.log(game.players[0].name);

// Practice 7
const vehicle = {
  type: "car",
  features: { color: "red", brand: { name: "Toyota", model: "Corolla" } },
};
console.log(vehicle.features.brand.name);
