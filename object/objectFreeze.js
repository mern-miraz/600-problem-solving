const headphone = {
  brand: "Sony",
  price: 3000,
  color: "red",
};
Object.freeze(headphone);
headphone.camera = "triple";
console.log(headphone);

const player = {
  name: "Messi",
  goals: 800,
  club: "Inter Miami",
};
Object.freeze(player);
player.country = "Argentina";
console.log(player);

const book = {
  title: "Harry Potter",
  author: "JK Rowling",
  pages: 500,
};
Object.seal(book);
book.author = "JK";
console.log(book);

const gadget = {
  name: "iPhone",
  price: 120000,
  color: "black",
};
delete gadget.price;
console.log(gadget);

const animal = {
  name: "Tiger",
  location: "Sundarban",
};
Object.freeze(animal);
animal.location = "bandorban";
console.log(animal);

const food = {
  name: "Pizza",
  price: 500,
  size: "Large",
};
Object.seal(food);
food.price = 1000;
console.log(food);
