// Practice 1
const snakes = [30, 45, 20, 60, 10];
const snakesPrice = snakes.map((snake) => snake + 13);
console.log(snakesPrice);

// Practice 2
const playerList = ["Messi", "Maradona", "Pele", "Zidane", "Ronaldo"];
const selected = playerList.filter((player) => player.length > 5);
console.log(selected);

// Practice 3
const numberList = [10, 15, 20, 25, 30, 35];
const index = numberList.find((num) => num > 20);
console.log(index);

// Practice 4
const height = [65, 70, 68, 72, 68, 73];
const bigerThen69 = height.filter((hei) => hei > 69);
console.log(bigerThen69);

// Practice 5
const digits = [7, 10, 15, 20, 25, 30];
const degitDevide = digits.map((dig) => (dig / 3).toFixed(2));
console.log(degitDevide);

// Practice 6
const friendList = [
  "Leonardo",
  "Brad Pitt",
  "Kate Winslet",
  "Audrey Hepburn",
  "Johnny Depp",
];
const thirdLetter = friendList.map((friend) => friend[2]);
console.log(thirdLetter);

// Practice 6
const nameArr = ["Tom", "Harry", "Sam", "Jack"];
const findH = nameArr.find((nam) => nam[0] === "H");
console.log(findH);

// Practice 7
const numbers = [1, 2, 3, 4, 5];
const result = numbers.forEach((num) => console.log(num));

// Practice 8
const animals = ["cow", "goat", "sheep", "horse"];
const animalsResult = animals.forEach((animal) => console.log(animal));
