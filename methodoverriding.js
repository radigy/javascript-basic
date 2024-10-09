class Car {
    minSpeed = 100

    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    startEngine() {
        console.log('Starting engine... for car')
    }
}

class Audi extends Car {
    minSpeed = 200
    // overidden method
    startEngine() {
        console.log('Starting engine... for Audi')
    }

    autoParking() {
        console.log("audi -- autoparking")
    }
}

const audi = new Audi();
audi.startEngine();
audi.autoParking();
console.log(audi.minSpeed)
const car = new Car();
car.startEngine();
//car.autoParking();
