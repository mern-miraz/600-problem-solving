// Practice 1: Inheritance meaning explained
const inheritance =
  "Properties are passed step by step in a family of classes, like grandfather → father → son, avoiding code repetition";

// Practice 2: Parent-child relationship explanation
const relation =
  "Builds a connection between parent and child classes using extends and super keywords";

// Practice 3: Vehicles with inheritance
class ParentVehicle {
  constructor(name, engine, wheels, brakes, fuel, handle) {
    this.name = name;
    this.engine = engine;
    this.wheels = wheels;
    this.brakes = brakes;
    this.fuel = fuel;
    this.handle = handle;
  }
}

// Child class Bike
class Bike extends ParentVehicle {
  constructor(name, engine, wheels, brakes, fuel, handle, isBigLight) {
    super(name, engine, wheels, brakes, fuel, handle);
    this.isBigLight = isBigLight;
  }
}
const myBike = new Bike(
  "R15",
  "155 cc, liquid-cooled, single-cylinder",
  "R15 has two alloy wheels with tubeless tyres.",
  "R15 has disc brakes on both front and rear with ABS for safety.",
  "R15 uses petrol as fuel.",
  "R15 has a clip-on handlebar, which helps in better control and sporty riding posture.",
  false,
);
console.log(myBike);

// Child class Bus
class Bus extends ParentVehicle {
  constructor(name, engine, wheels, brakes, fuel, handle, isAC) {
    super(name, engine, wheels, brakes, fuel, handle);
    this.isAC = isAC;
  }
}
const myBus = new Bus(
  "Bus",
  "Large diesel or petrol engine (usually 4–6 cylinders)",
  "4 or more wheels",
  "Air brakes or hydraulic brakes to stop a big vehicle safely",
  "Diesel or petrol",
  "Steering wheel to control direction",
  true,
);
console.log(myBus);

// Child class Truck
class Truck extends ParentVehicle {
  constructor(name, engine, wheels, brakes, fuel, handle, isDistrict) {
    super(name, engine, wheels, brakes, fuel, handle);
    this.isDistrict = isDistrict;
  }
}
const myTruck = new Truck(
  "Truck",
  "Diesel engine (usually 4–12 cylinders depending on size)",
  "4 or more wheels (heavy trucks can have 6–18 wheels)",
  "Air brakes or hydraulic brakes for heavy loads",
  "Diesel",
  "Steering wheel to control direction",
  "Yes – this truck is usually used for district/local transport of goods",
);
console.log(myTruck);

// Practice 4: LivingBeing and subclasses
class LivingBeing {
  constructor(name, age, color, weight, habitat) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.weight = weight;
    this.habitat = habitat;
  }
}

class Animal extends LivingBeing {
  constructor(name, age, color, weight, habitat, isMammal) {
    super(name, age, color, weight, habitat);
    this.isMammal = isMammal;
  }
}
const animal = new Animal("Lion", 5, "Golden", 190, "Savannah", true);
console.log(animal);

class Bird extends LivingBeing {
  constructor(name, age, color, weight, habitat, canFly) {
    super(name, age, color, weight, habitat);
    this.canFly = canFly;
  }
}
const bird = new Bird("Parrot", 2, "Green", 1, "Forest", true);
console.log(bird);

class Fish extends LivingBeing {
  constructor(name, age, color, weight, habitat, swimmingSpeed) {
    super(name, age, color, weight, habitat);
    this.swimmingSpeed = swimmingSpeed;
  }
}
const fish = new Fish("Salmon", 3, "Silver", 4, "River", 25);
console.log(fish);

// Practice 5: Furniture classes
class Furniture {
  constructor(material, color, weight, height, price) {
    this.material = material;
    this.color = color;
    this.weight = weight;
    this.height = height;
    this.price = price;
  }
}

class Chair extends Furniture {
  constructor(material, color, weight, height, price, hasArmrest) {
    super(material, color, weight, height, price);
    this.hasArmrest = hasArmrest;
  }
  sit() {
    console.log("You are sitting on the chair");
  }
}
const chair = new Chair("Wood", "Brown", 12, 1, 2500, true);
console.log(chair);

class Table extends Furniture {
  constructor(material, color, weight, height, price, isFoldable) {
    super(material, color, weight, height, price);
    this.isFoldable = isFoldable;
  }
}
const table = new Table("Metal", "Black", 20, 0.8, 5000, true);
console.log(table);

// Practice 6: Pets
class Pet {
  constructor(name, age, color, weight, favoriteFood) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.weight = weight;
    this.favoriteFood = favoriteFood;
  }
}

class Dog extends Pet {
  constructor(name, age, color, weight, favoriteFood, breed) {
    super(name, age, color, weight, favoriteFood);
    this.breed = breed;
  }
}
const dog = new Dog("Buddy", 3, "Brown", 15, "Dog Food", "Labrador");
console.log(dog);

class Cat extends Pet {
  constructor(name, age, color, weight, favoriteFood, favoriteToy) {
    super(name, age, color, weight, favoriteFood);
    this.favoriteToy = favoriteToy;
  }
}
const cat = new Cat("Whiskers", 2, "Gray", 5, "Cat Food", "Ball");
console.log(cat);

class Parrot extends Pet {
  constructor(name, age, color, weight, favoriteFood, canTalk) {
    super(name, age, color, weight, favoriteFood);
    this.canTalk = canTalk;
  }
}
const parrot = new Parrot("Polly", 1, "Green", 0.5, "Seeds", true);
console.log(parrot);

// Practice 7: DRY Principle
const dry =
  "DRY: Don't Repeat Yourself, write reusable code to avoid repetition"; // Grammar fixed
console.log(dry);
