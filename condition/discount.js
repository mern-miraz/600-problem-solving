const basePrice = 4500;
if (basePrice >= 6000) {
  const discountPrice = (basePrice / 100) * 15;
  const payablePrice = basePrice - discountPrice;
  console.log(payablePrice);
} else if (basePrice >= 3000) {
  const discountPrice = (basePrice / 100) * 5;
  const payablePrice = basePrice - discountPrice;
  console.log(payablePrice);
} else {
  console.log("No discount applied. Please pay the full price.");
}

const age = 61;
if (age <= 12) {
  console.log("You can eat everything for free since you are under 12.");
} else if (age >= 60) {
  console.log("You get a 50% discount at our shop.");
} else {
  console.log("You have to pay the full amount.");
}

const acBalance = 5100;
if (acBalance < 1000) {
  console.log("Please deposit the amount into your account");
} else if (acBalance >= 1000 && acBalance <= 5000) {
  console.log("You’re living a bindas life. Enjoy it");
} else {
  console.log("I’m rich. Please go to the marriage registry office.");
}

const marks = 49;
if (marks >= 80) {
  console.log("Got A+");
} else if (marks >= 50) {
  console.log("Pass");
} else if (marks < 50) {
  console.log("Fail");
}

const bookPage = 510;
if (bookPage < 100) {
  console.log("Small Book");
} else if (bookPage < 500) {
  console.log("Mid-size-book");
} else if (bookPage > 500) {
  console.log("heart-attack size book");
}

const temparature = 25;
if (temparature < 0) {
  console.log("Ice");
} else if (temparature < 20) {
  console.log("Cool Cool");
} else if (temparature > 20) {
  console.log("Hot Hot");
}

const gameLevel = 55;
if (gameLevel < 10) {
  console.log("novice");
} else if (gameLevel < 50) {
  console.log("Expert");
} else if (gameLevel > 50) {
  console.log("Pro gamer");
}
