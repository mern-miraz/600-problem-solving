// 1. Object Destructuring with Rest Operator
const product = {
  name: "Laptop",
  price: 50000,
  brand: "Dell",
};
const { name, ...restProduct } = product;
console.log(name);
console.log(restProduct);

// 2. Object Destructuring with Rest
const project = {
  id: 101,
  title: "Web app",
  budget: 3000,
  client: "Tech Corp",
};
const { title, ...restProject } = project;
console.log(title);
console.log(restProject);

// 3. Multiple Property Extraction with Rest
const programmer = {
  name: "Sophia",
  language: "JavaScript",
  experience: 5,
  specialty: "Frontend",
  tools: "React",
};
const { language, specialty, ...restProgrammer } = programmer;
console.log(language);
console.log(specialty);
console.log(restProgrammer);

// 4. Array Destructuring with Rest Operator
const digits = [10, 20, 3, 30, 300, 3000];
const [, , ...restDigits] = digits;
console.log(restDigits);

// 5. Rest Parameter in Function
function sum(first, second, ...restSum) {
  let result = 0;
  for (const number of restSum) {
    result += number;
  }
  return result;
}
console.log(sum(10, 20, 25, 30, 35, 40, 45));

// 6. Average Calculation using Rest Parameter
function gor(...numbers) {
  if (numbers.length === 0) return 0;

  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }

  const average = sum / numbers.length;
  return parseFloat(average.toFixed(2));
}
console.log(gor(10, 20, 24, 25, 75, 35, 56));
