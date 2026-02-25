// =======================================
// Practice 1: Difference between class and object
// =======================================
const difClassAndObj =
  "A class is a blueprint used to create multiple objects with the same structure, and an object is a non-primitive data type that stores data in key-value pairs.";
console.log(difClassAndObj);

// =======================================
// Practice 2: What is a class instance
// =======================================
const classInstance =
  "A class instance is an object created using a class, and the instanceof operator is used to check whether an object belongs to a specific class.";
console.log(classInstance);

// =======================================
// Practice 3: Vehicle class and instances
// =======================================
class Vehicle {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
const bmwX5 = new Vehicle("BMW", "X5", 19800000);
const tesla = new Vehicle("Tesla", "Model 3", 40000);
console.log(bmwX5);
console.log(tesla);

// =======================================
// Practice 4: Worker class
// =======================================
class Worker {
  constructor(id, name, hoursWorked) {
    this.id = id;
    this.name = name;
    this.hoursWorked = hoursWorked;
  }
}
const worker = new Worker(101, "Tom Cruise", 40);
console.log(worker);

// =======================================
// Practice 5: Library class and instanceof check
// =======================================
class Library {
  constructor(name, books, location) {
    this.name = name;
    this.books = books;
    this.location = location;
  }
}
const newLibrary = new Library("Central Library", 10000, "Dhaka");
console.log(newLibrary instanceof Library);

// =======================================
// Practice 6: Classroom class
// =======================================
class Classroom {
  constructor(section, teacher, students = []) {
    this.students = students;
    this.section = section;
    this.teacher = teacher;
  }
}
const newClass = new Classroom("A", "Mr. Plumber");
console.log(newClass);

// =======================================
// Practice 7: Product class
// =======================================
class Product {
  constructor(name, category, stock) {
    this.name = name;
    this.category = category;
    this.stock = stock;
  }
}
const newProduct = new Product("Mobile", "Electronics", 50);
console.log(newProduct);

// =======================================
// Practice 8: Product class with default stock value
// =======================================
class ProductWithDefaultStock {
  constructor(name, category, stock = 0) {
    this.name = name;
    this.category = category;
    this.stock = stock;
  }
}
const product1 = new ProductWithDefaultStock("Mobile", "Electronics", 50);
const product2 = new ProductWithDefaultStock("Mobile", "Electronics");
console.log(product1);
console.log(product2);
