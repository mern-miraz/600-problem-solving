// // ============================================================
// // 🚀 JAVASCRIPT PRACTICE: TYPE CONVERSION & OBJECTS
// // ============================================================

// // Practice 1: String to Number Conversion
// const start = "786";
// const strToNum1 = Number(start);
// const strToNum2 = +start;
// console.log("Converted by Number Constructor method", strToNum1);
// console.log("Converted by using + symbol", strToNum2);

// // Practice 2: Boolean Conversion
// const willAttend = 0;
// console.log(Boolean(willAttend));

// // Practice 3: Object Constructor
// const world = new Object();
// world.city = "Dhaka";
// world.country = "Bangladesh";
// console.log(world);

// // Practice 4: Number to String Conversion
// const total = 1970;
// const numToStr1 = String(total);
// const numToStr2 = total + "";
// console.log("Converted by String Constructor method", numToStr1);
// console.log("Converted by using string symbol", numToStr2);

// const strNum = "15";
// // const result = Number("50");
// console.log(+"500");

// const num = 500;
// // console.log(typeof String(1000));
// console.log(num + "");

// console.log(Boolean(0));
// console.log(Boolean(" "));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(false));

const fun = new Function("a", "b", "return a +b");
console.log(typeof fun());

console.log(typeof new Number(50));
