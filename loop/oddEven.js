for (let number = 20; number <= 50; number++) {
  if (number % 7 === 0) {
    console.log(number);
  }
}

for (let number = 40; number <= 80; number++) {
  if (number % 5 === 0 && number % 7 === 0) {
    console.log(number);
  }
}

let sum = 0;
for (let num = 1; num <= 40; num++) {
  if (num % 13 === 0) {
    sum += num;
  }
}
console.log(sum);

for (let num = 1; num <= 50; num += 4) {
  console.log(num);
}

for (let num = 0; num <= 100; num++) {
  if (num % 9 === 0 && num % 6 === 0) {
    console.log(num);
  }
}

let sum2 = 0;
for (let num = 1; num <= 50; num++) {
  if (num % 3 === 0 && num % 4 === 0) {
    sum2 += num;
  }
}
console.log(sum2);
