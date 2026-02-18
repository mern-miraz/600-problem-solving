// ============================================================
// 🚀 JAVASCRIPT PRACTICE: DATE OBJECT & TIME MANIPULATION
// ============================================================

// Practice 1: Getting the current timestamp
const now = new Date();
console.log(now);

// Practice 2: Creating a custom date
const date = new Date(2035, 6, 15, 14, 45, 30);
console.log(date);

// Practice 3: Extracting the current year
const year = new Date();
console.log(year.getFullYear());

// Practice 4: Modifying the year of a Date object
const setYear = new Date("January 01, 2025");
console.log(setYear.setFullYear(2040));

// Practice 5: Finding the day of the week for a specific date
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const year2 = new Date("2029-02-16");
const day = year2.getDay();
const dayName = days[day];
console.log(dayName);
