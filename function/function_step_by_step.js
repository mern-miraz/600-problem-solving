// Number 1 ---
function sumOfOdd(arr) {
  let sum = 0;
  for (const number of arr) {
    if (number % 2 === 1) {
      sum += number;
    }
  }
  return sum;
}
const numbers = [5, 15, 8, 7];
const total = sumOfOdd(numbers);
console.log(total);

// Number 2 ----
function smallestNumber(numbers) {
  if (numbers[0] < numbers[1]) {
    return numbers[0];
  }
  if (numbers[1] < numbers[0]) {
    return numbers[1];
  }
}
const arrayNumber = [20, 19, 78];
const result = smallestNumber(arrayNumber);
console.log(result);

// Number 3 -----
function ageCount(age) {
  if (age < 18) {
    return 18;
  }
  if (age > 45) {
    return 45;
  }
  return age;
}
const ageNumber = 30;
const ageResult = ageCount(ageNumber);
console.log(ageResult);

// Number 4 -----
function sumOf4(num) {
  let sum = 0;
  for (const number of num) {
    if (number % 4 === 0) {
      sum += number;
    }
  }
  return sum;
}
const friendsNumber = [2, 4, 5, 7, 8, 32, 45];
const totalOf4 = sumOf4(friendsNumber);
console.log(totalOf4);

// Number 5 ------
function devide20(number) {
  if (number < 20) {
    return number * 2;
  }
  return number / 20;
}
const getNumber = 400;
const resultOfGetNumber = devide20(getNumber);
console.log(resultOfGetNumber);

// Number 6 -----
function sumOfNegative(arr) {
  let sum = 0;
  for (const number of arr) {
    if (number < 0) {
      sum += number;
    }
  }
  return sum;
}
const negativeNumber = [4, -5, 8, -7, 12, -41, 65, -25, -85];
const negativeNumberResult = sumOfNegative(negativeNumber);
console.log(negativeNumberResult);

// Number 7 ------
function multiplyOf3(arrayNumber) {
  let multiply = 1;
  for (const number of arrayNumber) {
    if (number % 3 === 0) {
      multiply *= number;
    }
  }
  return multiply;
}
const multiply = [2, 9, 6, 3, 49, 76, 25, 64, 78, 95, 34];
const multiplyOf3Result = multiplyOf3(multiply);
console.log(multiplyOf3Result);
