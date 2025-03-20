'use strict';

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   // this is a method
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.brake();
// bmw.brake();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class CarCl {
//   constructor(make, speed) {
//     // constructor is a method
//     this.make = make; // this is a property

//     this.speed = speed; // this is a property
//   } // this is a method
//   accelerate() {
//     // this is a method
//     this.speed += 10; // this is a property
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   brake() {
//     // this is a method
//     this.speed -= 5; // this is a property

//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     // this is a getter

//     return this.speed / 1.6; // this is a property
//   }

//   set speedUS(speed) {
//     // this is a setter
//     this.speed = speed * 1.6; // this is a property
//   }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// console.log(ford.speed);

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;      // this is a property
//   this.speed = speed;    // this is a property
// };

// Car.prototype.accelerate = function () {

//   this.speed += 10; // this is a property

//   console.log(`${this.make} is going at ${this.speed} km/h`); // this is a property
// };

// Car.prototype.brake = function () {

//   this.speed -= 5; // this is a property

//   console.log(`${this.make} is going at ${this.speed} km/h`); // this is a property
// };

// const ElectricCar = function (make, speed, charge) {
//   Car.call(this, make, speed); // this is a property
//   this.charge = charge; // this is a property
// };

// ElectricCar.prototype = Object.create(Car.prototype); // this is a property

// ElectricCar.prototype.chargeBattery = function (chargeTo) {

//   this.charge = chargeTo; // this is a property
// }

// ElectricCar.prototype.accelerate = function () {

//   this.speed += 20; // this is a property
//   this.charge -= 1; // this is a property

//   console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`); // this is a property
// };

// const tesla = new ElectricCar('Tesla', 120, 23); // this is a property
// tesla.accelerate(); // this is a property
// tesla.brake(); // this is a property
// tesla.chargeBattery(90); // this is a property
// tesla.accelerate(); // this is a property
// tesla.accelerate(); // this is a property

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    // this is a method

    this.make = make; // this is a property
    this.speed = speed; // this is a property
  } // this is a method

  accelerate() {
    // this is a method
    this.speed += 10; // this is a property
    console.log(`${this.make} is going at ${this.speed} km/h`); // this is a property
    return this; // this is a property
  }

  brake() {
    // this is a method

    this.speed -= 5; // this is a property
    console.log(`${this.make} is going at ${this.speed} km/h`); // this is a property
    return this; // this is a property
  }
}

class EVCl extends CarCl {
  #charge; // this is a property

  constructor(make, speed, charge) {
    // this is a method
    super(make, speed); // this is a property

    this.#charge = charge; // this is a property
  } // this is a method

  accelerate() {
    // this is a method
    this.speed += 20; // this is a property
    this.#charge -= 1; // this is a property

    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    ); // this is a property
    return this; // this is a property
  }

  chargeBattery(chargeTo) {
    // this is a method
    this.#charge = chargeTo; // this is a property
    return this; // this is a property
  }
}

const rivian = new EVCl('Rivian', 120, 23); // this is a property
console.log(rivian); // this is a property
rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate(); // this is a property
console.log(rivian); // this is a property
rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate(); // this is a property
console.log(rivian); // this is a property

rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate(); // this is a property
console.log(rivian); // this is a property
rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate(); // this is a property
console.log(rivian); // this is a property
rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate(); // this is a property
console.log(rivian); // this is a property
rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate(); // this is a property
console.log(rivian); // this is a property
rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate(); // this is a property
console.log(rivian); // this is a property
rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate(); // this is a property
console.log(rivian); // this is a property
rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate(); // this is a property
console.log(rivian); // this is a property
rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate(); // this is a property
console.log(rivian); // this is a property
rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate(); // this is a property
console.log(rivian); // this is a property
rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate(); // this is a property
