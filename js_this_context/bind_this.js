// ==========================
// 🔹 Practice 1: Using bind()
// ==========================
// Creating a team object
const team = {
  name: "Rajshahi Royals",
  players: 11,
  play() {
    console.log(`Team: ${this.name}, Players: ${this.players}`);
  },
};
team.play();

// Creating another object named tournament
const tournament = {
  name: "Dhaka Dominators",
  players: 15,
};

// Using bind() to permanently set 'this' to tournament
const tournamentPlay = team.play.bind(tournament);
tournamentPlay();

// ==========================
// 🔹 Practice 2: Using call()
// ==========================
// Creating car object
const car = {
  speed: 125,
  price: 1250000,
  drive() {
    console.log(`Speed: ${this.speed}, Price: ${this.price}`);
  },
};

// Creating bike object
const bike = {
  speed: 150,
  price: 450000,
};

// Creating truck object
const truck = {
  speed: 250,
  price: 1500000,
};
car.drive.call(bike);
car.drive.call(truck);

// ==========================
// 🔹 Practice 3: Using apply()
// ==========================
// Creating employee object
const employee = {
  name: "Miraz",
  role: "Front-End Developer",
  details() {
    console.log(`Name: ${this.name}, Role: ${this.role}`);
  },
};
employee.details();

// Creating manager object
const manager = {
  name: "Shojol",
  role: "Manager",
};
employee.details.apply(manager);

// ==========================
// 🔹 Practice 4: Using bind() with array join()
// ==========================
// Creating classroom object
const classroom = {
  name: "Class 7",
  students: ["Miraz", "Habib", "Sakib", "Naim", "Momin"],
  attendance() {
    console.log(`Class: ${this.name}, Students: ${this.students.join(", ")}`);
  },
};
classroom.attendance();

// Creating lab object
const lab = {
  name: "Computer Lab",
  students: ["Hafiz", "Golam", "Nur Alom", "Mofiz", "Khairul"],
};
const labAttendance = classroom.attendance.bind(lab);
labAttendance();
