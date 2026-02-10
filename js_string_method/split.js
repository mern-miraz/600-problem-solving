// ============================================================
// 🚀 JAVASCRIPT STRING MANIPULATION & FORMATTING
// ============================================================

// Practice 1: Converting a comma-separated string into an array
const friends = "Raju, Rana, Hasan, Kabir, Mahi";
const friendsSplite = friends.split(",");
console.log(friendsSplite);

// Practice 2: Joining an array into a single string with commas
const friendsArr = ["Sakib", "Mahi", "Rakib", "Naim", "HafiZ"];
console.log(friendsArr.join(" ,"));

// Practice 3: Splitting keywords by space
const jsKey = "functuin if else while";
console.log(jsKey.split(" "));

// Practice 4: Joining language names with a semicolon
const languages = ["JavaScript", "Python", "Java"];
console.log(languages.join("; "));

// Practice 5: Extracting loop names using split
const loop = "for,while,for-in,for-of,do-while";
console.log(loop.split(","));

// Practice 6: Removing whitespace from both ends
const log = " console log debug ";
console.log(log.trim());

// Practice 7: Concatenating multiple strings
const str1 = "push";
const str2 = "pop";
const str3 = "shift";
const str4 = "unshift";
console.log(str1.concat(" ", str2, " ", str3, " ", str4));

// Practice 8: Extracting a specific word using slice
const dev = "Hello JavaScript Developers";
console.log(dev.slice(6, 16));

// Practice 9: Extracting "learn" using substring
const code = "Code more learn more";
console.log(code.substring(5, 9));
