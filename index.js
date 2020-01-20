'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');

console.log('Using Constructor');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class

const VehicleClass = require('./vehicle-class.js');
console.log('Using Class');
const mazda = new VehicleClass.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleClass.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());


