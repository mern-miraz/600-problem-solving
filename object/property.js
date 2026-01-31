const player = {
  name: "Miraz",
  age: 25,
  sports: "cricket",
  team: "KPL",
};
console.log(player.team);

const laptop = {
  brand: "apple",
  price: 85000,
  hardDisc: 500,
  ram: 16,
  screenSize: 16,
};
console.log(laptop.screenSize);

const favPlace = {
  name: "Cox's Bazar",
  distance: "400km",
  popoularity: "high",
};
console.log(favPlace["popoularity"]);

const phone = {
  brand: "Nokia",
  color: "black",
  price: 5000,
};
console.log(phone["price"]);

const library = {
  name: "Public Library",
  location: "Dhaka",
  books: 5000,
};
console.log(library.location);

const movie = {
  title: "Inception",
  director: "Nolan",
  rating: 9,
};
console.log(movie["rating"]);

const college = {
  name: "ndc",
  established: 1949,
  groups: ["Science", "Arts", "Commerce"],
};
console.log(college.groups[1]);

const family = {
  father: {
    name: "Abdus Salam",
    age: 65,
    profession: "farmer",
  },
  mother: {
    name: "Majeda Begum",
    age: 45,
    profession: "Houswife",
  },
};

const fatherAge = family.father.age;
const motherAge = family.mother.age;
const totalAge = fatherAge + motherAge;
console.log(totalAge);
