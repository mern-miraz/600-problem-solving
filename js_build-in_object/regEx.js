// ============================================================
// 🚀 JAVASCRIPT PRACTICE: REGULAR EXPRESSIONS (REGEX)
// ============================================================

// Practice 1: Replacing a specific word using a pattern
const sentence = "I bought an orange";
const repSen = sentence.replace(/orange/g, "grape");
console.log(repSen);

// Practice 2: Testing for a partial match
const sentence2 = "I like to have apple and banana";
const result = /ana/i;
console.log(result.test(sentence2));

// Practice 3: Global replacement of all matching words
const eatingFruits = "I am eating apple. apple is good. apple helps me a lot";
const repFruits = eatingFruits.replace(/apple/g, "JavaScript");
console.log(repFruits);
