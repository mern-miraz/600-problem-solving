// 1️⃣ Ekta array theke shudhu even number gula niye average ber kora
function evenAverage(numbers) {
  let sum = 0;
  let count = 0;

  for (const num of numbers) {
    if (num % 2 === 0) {
      sum += num;
      count++;
    }
  }

  return count === 0 ? 0 : sum / count;
}

// Test
console.log(evenAverage([2, 3, 4, 5, 6, 8]));

// 2️⃣ Array er shudhu odd number gula 2 diye gun kore new array বানানো
function oddMultiply(numbers) {
  const result = [];

  for (const num of numbers) {
    if (num % 2 !== 0) {
      result.push(num * 2);
    }
  }

  return result;
}

// Test
console.log(oddMultiply([1, 2, 3, 4, 5]));

// 3️⃣ Array te kono odd number ache kina check kora
function oddCheck(numbers) {
  for (const num of numbers) {
    if (num % 2 !== 0) {
      return "Odd numbers found";
    }
  }
  return "No odd numbers found";
}

// Test
console.log(oddCheck([2, 4, 6]));
console.log(oddCheck([2, 4, 7]));

// 4️⃣ Array er odd number gula niye average ber kore 2 decimal porjonto return
function oddAverage(numbers) {
  let sum = 0;
  let count = 0;

  for (const num of numbers) {
    if (num % 2 !== 0) {
      sum += num;
      count++;
    }
  }

  if (count === 0) return 0;

  return parseFloat((sum / count).toFixed(2));
}

// Test
console.log(oddAverage([1, 3, 5, 7]));
console.log(oddAverage([1, 5, 9]));

// 5️⃣ Protita odd number theke 1 biyog kore new array বানানো
function oddMinusOne(numbers) {
  const result = [];

  for (const num of numbers) {
    if (num % 2 !== 0) {
      result.push(num - 1);
    }
  }

  return result;
}

// Test
console.log(oddMinusOne([3, 4, 5, 6, 7]));
