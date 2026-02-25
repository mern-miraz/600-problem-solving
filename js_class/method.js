// =======================================
// Practice 1: Hotel class
// =======================================
class Hotel {
  constructor(name, room, perNight) {
    this.name = name;
    this.room = room;
    this.perNight = perNight;
  }
  getName() {
    return this.name;
  }
}
const hotel = new Hotel("Hotel Sea Beach", 50, 5000);
console.log(hotel?.getName?.() ?? "Method doesn't exist");

// =======================================
// Practice 2: Employee class
// =======================================
class Employee {
  constructor(name, role, salary) {
    this.name = name;
    this.role = role;
    this.salary = salary;
  }
  getSalary() {
    return this.salary;
  }
}
const employee = new Employee("Miraz", "Front-end Developer", 25000);
console.log(employee.getSalary());

// =======================================
// Practice 3: Library class
// =======================================
class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  hasBook(book) {
    return this.books.includes(book);
  }
}
const library = new Library();
library.addBook("JS");
library.addBook("Math");
console.log(library.hasBook("Math"));
console.log(library.hasBook("js"));

// =======================================
// Practice 4: ShoppingCart class
// =======================================
class ShoppingCart {
  constructor() {
    this.products = [];
    this.totalPrice = 0;
  }

  addToCart(name, price) {
    this.products.push(name);
    this.totalPrice += price;
  }

  getTotalPrice() {
    return this.totalPrice;
  }
}
const cart = new ShoppingCart();
cart.addToCart("Android Phone", 25000);
cart.addToCart("Lenovo Laptop", 60000);
console.log(cart.getTotalPrice());
