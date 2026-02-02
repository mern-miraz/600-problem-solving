function isArrayEven(number) {
  const length = number.length;
  if (length % 2 === 0) {
    return "It's an Even Number Array";
  }
  return "It's an Odd Number Array";
}
const arr = [14, 15, 17, 18, 16, 18, 17, 65, 85, 23];
console.log(isArrayEven(arr));

function nameCheck(name) {
  return name[0];
}
console.log(nameCheck("Raju"));

function isOver10(number) {
  if (number > 10) {
    return number / 10;
  }
  return number * 10;
}
console.log(isOver10(20));

function sumInArray(number) {
  return number[0] + number[1];
}
console.log(sumInArray([10, 20]));

function doubleOrTriple(n) {
  if (n > 0) {
    return n * 2;
  }
  return n * 3;
}
console.log(doubleOrTriple(-2));

function nameSize(num1, num2) {
  const num1Length = num1.length;
  const num2Length = num2.length;
  if (num1Length > num2Length) {
    return true;
  }
  return false;
}
console.log(nameSize("miraz", "nila"));

function isMultiply(num1, num2) {
  const total = num1 * num2;
  if (total > 100) {
    return total / 2;
  }
  return total;
}

console.log(isMultiply(10, 48));
