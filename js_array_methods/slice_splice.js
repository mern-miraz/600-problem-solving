// ============================================================
// 🚀 JAVASCRIPT ARRAY METHODS: SLICE VS SPLICE
// ============================================================
// Practice 1: Extracting elements using slice()
const fruits = ["Apple", "Banana", "Cherry", "Date"];
const fruitsSlice = fruits.slice(1, 3);
console.log(fruitsSlice);

// Practice 2: Getting the first two elements using slice()
const cars = ["Tesla", "BMW", "Toyota", "Ford"];
const carsSlice = cars.slice(0, 2);
console.log(carsSlice);

// Practice 3: Replacing elements using splice()
const movieList = ["Inception", "Titanic", "Joker", "Avatar", "Interstellar"];
const movieListSplice = movieList.splice(2, 2, "Batman", "Superman");
console.log(movieList);

// Practice 4: Removing and adding a single item using splice()
const players = ["Messi", "Ronaldo", "Neymar", "Mbappe"];
const playersSplice = players.splice(2, 1, "Halland");
console.log(players);
