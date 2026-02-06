// Practice number 1
// এখানে দুইটা number declare করা হয়েছে
const num1 = 100;
const num2 = 20;
const result = `The difference between ${num1} and ${num2} is ${num1 - num2}`;
console.log(result);

// Practice number 2
// Employee er information object আকারে রাখা হয়েছে
const employ = { name: "miraz", age: 25, salary: 30000 };
console.log(
  `Name: ${employ.name}, Age: ${employ.age}, Salary: ${employ.salary}`,
);

// Practice number 3
// Fruits er ekta array
const fruits = ["apple", "banan", "orange", "goava"];
console.log(`My favourite fruits is ${fruits[3]}`);

// Practice number 4
// Division er example
const a = 50;
const b = 10;
console.log(`The division of a and b is ${a / b}`);

// Practice number 5
// Person er object
const person = { firstName: "Amit", LastName: "Kumar" };
console.log(`Full Name: ${person.firstName} ${person.LastName}`);

// Practice number 6
// Animals er array
const animals = ["Cat", "Dog", "Elephent"];
console.log(`My favorite animals are ${animals.join(", ")}`);

// Practice number 7
// Student object, result array সহ
const student = { name: "Miraz", age: 25, result: [85, 76, 82] };
const studentResult = `Student Name: ${student.name}, ${
  (student.result[0] + student.result[1] + student.result[2]) / 3
}`;

console.log(studentResult);
