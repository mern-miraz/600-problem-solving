// Practice 1: JavaScript Inheritance Explanation
const jsInheritance =
  "JavaScript inheritance works through prototype chaining.";

// Practice 2: Prototypical Inheritance Explanation
const protoInheritance =
  "JavaScript objects inherit from other objects because they are linked through prototypical inheritance.";

console.log(jsInheritance);
console.log(protoInheritance);

// Practice 3: person object and checking prototype
const person = {
  name: "Miraz",
};
const personProto = Object.getPrototypeOf(person);
console.log(personProto);
console.log(person.toString());

// Practice 4: student object using toString without defining it
const student = {
  name: "Miraz",
};
console.log(student.toString());
/*
Explanation:
- JavaScript first looks for a method inside the object itself
- If it is not found, it looks in the prototype
- Object.prototype contains toString()
- That is why student.toString() works even though it is not defined in student
*/
