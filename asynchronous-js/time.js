// Practice 1: Print message after 3 seconds using setTimeout()
setTimeout(() => {
  console.log(
    "I wasted 3 seconds of my life by looking at screen and doing nothing",
  );
}, 3000);

// Practice 2: Display numbers starting from 131, increasing by 2 every 2 seconds
let number = 131;
setInterval(() => {
  console.log(number);
  number += 2;
}, 2000);

// Practice 3: Log message every 2 seconds and stop after 6 times
let count = 0;
const intervalId = setInterval(() => {
  console.log("I am learning javascript");
  count++;
  if (count === 6) {
    clearInterval(intervalId);
  }
}, 2000);

// Practice 4: What is the default value if the second parameter of setTimeout is omitted?
const setTimeOutDefault =
  "If the second parameter is omitted in setTimeout, it defaults to 0 milliseconds.";
