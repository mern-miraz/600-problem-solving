function sumAges(num1, num2) {
  const result = num1 + num2;
  console.log(result);
}
const fatherAge = 65;
const sonAge = 25;
sumAges(fatherAge, sonAge);

function calculator(num1, num2) {
  const result = num1 * num2;
  console.log(result);
}
calculator(20, 15);

function sumOfMarks(num1, num2, num3) {
  const result = num1 + num2 + num3;
  console.log(result);
}
const math = 85;
const english = 75;
const bangla = 80;
sumOfMarks(math, english, bangla);

function myAge(year) {
  const result = 2026 - year;
  console.log(result);
}
myAge(2000);

function buy(num) {
  const result = num / 35;
  console.log(result);
}
buy(105);

function average(num1, num2, num3, num4) {
  const result = num1 + num2 + num3 + num4;
  const averageNumber = result / 4;
  console.log(averageNumber);
}
average(65, 55, 72, 81);

function sellingPrice(price) {
  const benifit = 250;
  const result = price + benifit;
  console.log(result);
}
sellingPrice(400);

function birthYear(num) {
  const age = 100;
  const result = num + age;
  console.log(result);
}
birthYear(2006);

function watchMobile(hoursPerDay) {
  const hoursInMotnh = hoursPerDay * 30;
  const daysEquivalent = hoursInMotnh / 24;
  console.log(`Hour in a month ${hoursInMotnh} hours`);
  console.log(`Day in a month ${daysEquivalent} days`);
}
watchMobile(5);
