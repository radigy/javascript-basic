class Car {
    static wheels = 4;

    constructor(name, model, price) {
        this.name = name;
        this.model = model;
        this.price = price
        this.wheels = 50 
    }

    static stop() {
        console.log("car -- stop")
    }

    drive(){
        console.log(this.name + " is driving")
    }
}

const c1 = new Car("Honda", 2023, 50);
console.log(`${c1.name}, ${c1.model}, ${c1.price}, ${Car.wheels}`)
console.log(Car.wheels)
Car.stop()
c1.drive();
Car.drive()