const movie = {
  title: "KGF Chapter 3",
  year: 2026,
  cast: ["name1", "name2", "name3"],
};
if (movie.year >= 2024) {
  console.log("Upcoming Movie");
} else {
  console.log("Old Gold");
}
for (const value of movie.cast) {
  console.log(value);
}

const price = [120, 450, 800, 150, 2300, 500];
let sum = 0;
const basePrice = 5000;
for (let key of price) {
  sum = sum + key;
}
console.log(sum);

if (sum >= basePrice) {
  console.log("Budget Exceeded");
} else {
  console.log("Under Control");
}

const friends = ["Sakib", "Rakib", "Naim", "Abir", "Siam"];
const naimIndex = friends.indexOf("Naim");
if (friends.includes("Abir")) {
  console.log("Abir is invited");
}
const popFriend = friends.pop();
const unshiftFriend = friends.unshift("Miraz");
console.log(naimIndex);
console.log(friends);

for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    if (i >= 30) {
      break;
    }
    console.log(i);
  }
}

const student = { name: "Karim", id: 101, marks: 85, city: "Dhaka" };
const studentKeys = Object.keys(student);
for (const key of studentKeys) {
  console.log(key);
}
if (student.marks >= 80) {
  student.result = "A+";
}
console.log(student);
