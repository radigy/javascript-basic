class Automobile {
    constructor(chasisNumber) {
        this.chasisNumber = chasisNumber;
    }
    useAeroDynamic(){
        console.log("Automobile -- aerodynamic " + this.chasisNumber)
    }
}

//parent (super)

class Vehicle extends Automobile{
    constructor(chasisNumber, make, model, year) {
        super(chasisNumber)
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `${this.make}, ${this.model}, ${this.year}`;
    }

    startEngine(){
        console.log("Starting engine ...")
    }

    stopEngine(){
        console.log("Stopping engine ...")
    }
}

//child
class Car extends Vehicle {
    constructor(chasisNumber, make, model, year, fuelType) {
        super(chasisNumber, make, model, year); //call the parent class constructor
        this.fuelType = fuelType;
    }
    driverCar() {
        console.log("driving the car " + this.model)
    }
}

class Truck extends Vehicle {
    constructor(make, model, year, loadingCapacity) {
        super(make, model, year); //call the parent class constructor
        this.loadingCapacity = loadingCapacity;
    }
    driverTruck() {
        console.log("driving the truck " + this.model+ " capacity" + this.loadingCapacity)
    }

}

// creating the objects (instances): new keyword

const car = new Car("KR 4584x", "Honda", "Civic", 2023, "Petrol");
const truck = new Truck("Tata", "Sumo", 2020, 100)

car.startEngine();
console.log(car.getInfo())
car.driverCar();
car.useAeroDynamic();

console.log("------------")

truck.startEngine()
console.log(truck.getInfo())
truck.driverTruck()
