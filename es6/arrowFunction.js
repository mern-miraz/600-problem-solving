// Practice 1
const returnArray = (arr) => arr[0];
console.log(returnArray([10, 15, 20, 30]));

// Practice 2
const mult = (num1, num2, num3) => num1 * num2 * num3;
console.log(mult(5, 7, 8));

// Practice 3
const unkn = () => "unknown";
console.log(unkn());

// Practice 4
const employ = {
  name: "Miraz",
  pocket: 148,
};
const employMoney = (obj) => obj.pocket / 5;
console.log(employMoney(employ));

// Practice 5
const arr = [5, 8, 9, 3, 6, 4, 7, 8, 2, 6];
const sum = (arrayNumber) => {
  const size = arrayNumber.length - 1;
  const result = arrayNumber[0] + arrayNumber[size];
  return result;
};
console.log(sum(arr));

// Practice 6
const sum2 = (num1 = 10, num2 = 5) => num1 + num2;
console.log(sum2());
console.log(sum2(15, 45));
