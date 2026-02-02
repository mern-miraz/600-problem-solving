function over10(number) {
  if (number > 10) {
    return true;
  }
  return false;
}
console.log(over10(11));

function isEven13(number) {
  if (number % 13 === 0) {
    return true;
  }
  return false;
}
console.log(isEven13(100));

const rice = 30;
const curry = 250;
const drinks = 80;
function price(price1, price2) {
  return price1 + price2;
}
const bill1 = price(rice, curry);
const totalBill = price(bill1, drinks);
console.log(totalBill);

function forVote(numer) {
  if (numer >= 18) {
    return "Eligible for Voting";
  }
  return "Not Eligible";
}
console.log(forVote(18));

function stringLength(string) {
  return string.length;
}
console.log(stringLength("my name is"));

function gor(num1, num2, num3) {
  const sum = num1 + num2 + num3;
  const gor = sum / 3;
  return gor;
}
console.log(gor(15, 65, 72));

function makePositive(number) {
  if (number < 0) {
    return number * -1;
  }
  return number;
}
console.log(makePositive(-2));
