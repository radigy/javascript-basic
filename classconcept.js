class Car{
    constructor(name, price, model, color) {
        this.name = name,
        this.price = price, 
        this.model = model,
        this.color = color
    }

    refuel() {
        console.log(this.name + " car is refuled");
    }   
}

// new keyword to create object
const c1 = new Car("BMW", 100, "520d", "Black")
console.log(c1.name)
console.log(c1.model)
console.log(c1.price)
console.log(c1.color)

const c2 = new Car("Honda", 20, "Civic", "White")
c1.refuel()
c2.refuel()



