// ============================
// 1️⃣ Tax Bracket Function
// ============================
function tax(incomeAmount) {
  if (incomeAmount <= 50000) {
    return 10;
  } else if (incomeAmount <= 100000) {
    return 20;
  } else if (incomeAmount <= 200000) {
    return 30;
  } else if (incomeAmount > 200000) {
    return 40;
  }
}
console.log(tax(50000));
console.log(tax(50001));
console.log(tax(100001));
console.log(tax(200001));

// ============================
// 2️⃣ Package Delivery Charge
// ============================
function deliveryCharge(perKg) {
  if (perKg <= 10) {
    return 100;
  } else if (perKg <= 20) {
    return 300;
  } else if (perKg <= 50) {
    return 1000;
  } else {
    const extraWeight = perKg - 50;
    return 1000 + extraWeight * 100;
  }
}
console.log(deliveryCharge(10));
console.log(deliveryCharge(11));
console.log(deliveryCharge(21));
console.log(deliveryCharge(55));

// ============================
// 3️⃣ Grade Calculator
// ============================
function grade(marks) {
  if (marks >= 80) {
    return "A";
  } else if (marks >= 70) {
    return "B";
  } else if (marks >= 60) {
    return "C";
  } else if (marks >= 50) {
    return "D";
  } else {
    return "F";
  }
}
console.log(grade(80));
console.log(grade(70));
console.log(grade(60));
console.log(grade(50));
console.log(grade(49));

// ============================
// 4️⃣ Leap Year Counter
// ============================
function arrLeapYaer(arr) {
  let count = 0;
  for (const year of arr) {
    if (year % 400 === 0) {
      count++;
    } else if (year % 100 === 0) {
    } else if (year % 4 === 0) {
      count++;
    }
  }
  return count;
}
const year = arrLeapYaer([1900, 2000, 2300, 2252, 2056]);
console.log("Leap year count", year);
