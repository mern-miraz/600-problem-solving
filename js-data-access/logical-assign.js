// Practice 1: Demonstrates post-increment and pre-increment behavior and their output differences
let a = 59;
let b = a++;
console.log(b);
let c = ++a;
console.log(c);

// Practice 2: Uses division assignment operator to divide a value and store the result in the same variable
let orange = 100;
orange /= 15;
console.log(parseFloat(orange.toFixed(2)));

// Practice 3: Uses logical AND assignment to update the variable only if it is truthy
let mango = 20;
mango &&= 10;
console.log(mango);

// Practice 4: Uses multiplication assignment operator to multiply and update the same variable
let bananas = 50;
bananas *= 4;
console.log(bananas);

// Practice 5: Uses logical OR assignment which keeps the value unchanged because it is already truthy
let grapes = 19;
grapes ||= 10;
console.log(grapes);

// Practice 6: Uses subtraction assignment operator as a shortcut for reducing a variable’s value
let apples = 50;
apples -= 10;
console.log(apples);

// Practice 7: Uses logical OR assignment to set a default value when the variable is undefined
let price = undefined;
price ||= 90;
console.log(price);

// Practice 8: Demonstrates logical AND assignment where the operation affects the previously defined truthy variable
let tomato = 0;
mango &&= 5;
console.log(mango);

// Practice 9: Uses modulus assignment operator to store the remainder of a division
let apple = 15;
apple %= 6;
console.log(apple);
