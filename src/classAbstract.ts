abstract class Vehicle {
  abstract wheels: number;
  start(): void {
    console.log("Start Vehicle");
  }
}

class Car extends Vehicle {
  wheels: number = 4;
}

class Motorcycle extends Vehicle {
  wheels: number = 2;
}

let car = new Car();
car.start();
console.log(car.wheels);

let motor = new Motorcycle();
motor.start();
console.log(motor.wheels);
