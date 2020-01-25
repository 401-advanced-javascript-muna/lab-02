
'use strict';

// Vehicle Class
class Vehicle {

    // When creating a new Vehicle, store it's name and wheels

    constructor(name, wheels) {
        this.name = name;
        this.wheels = wheels;
    };


    drive() { return 'Moving Forward'; };

    stop() { return 'Stopping'; };
}

class Car extends Vehicle {   // if we have class we want to inher

    constructor(name, wheels) {
        super(name, 4);
    }

    run() {
        super.drive();
        super.stop();
    }

}

class Motorcycle extends Vehicle {

    constructor(name, wheels) {
        super(name, 2);
    }
    // Only for Vehicle.  This will also be a prototype method.
    wheelie() { return 'Wheee!';}

    // Calling the Motorcycle wheelie() method when Vehicle run()
    run() {
        super.drive();
        super.stop();
    }

}


module.exports = { Car, Motorcycle };  
// module.exports = Car;
