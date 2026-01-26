// What is the difference between includes and indexOf?
console.log(
  "There are key differences between includes and indexOf. Essentially, includes checks an array for a specific element and always returns a boolean (true or false). It is case-sensitive. In contrast, indexOf searches for an element and returns its index number if found; otherwise, it returns -1. If the result is a non-negative number (0 or higher), the element exists in the array. If it returns a negative number, the element was not found. Like includes, indexOf is also case-sensitive.",
);

const fruits = ["apple", "banana", "mango", "lychee"];
if (fruits.includes("mango")) {
  console.log("There is a mango in this array.");
} else {
  console.log("There are no mangoes on the array. Please climb the tree.");
}

const names = ["babul", "alif", "choton"];
const finfIndex = names.indexOf("babul");
console.log(finfIndex);

const friens = ["rimon", "rifat", "rajib"];
const rifatIndex = friens.indexOf("rifat");
console.log(rifatIndex);

const cityName = ["Dhaka", "Chittagong", "Sylhet"];
cityName.push("rajshahi");
const checkRaj = cityName.includes("Rajshahi");
console.log(checkRaj);

const rain = ["Pond", "Cloud", "Rain", "Monsoon"];
if (rain.includes("Rain")) {
  console.log("I need umberalla");
} else {
  console.log("No rain No pain");
}

const sports = ["Football", "Cricket", "Voly ball"];
const haveBadminton = sports.includes("Badminton");
console.log(haveBadminton);
