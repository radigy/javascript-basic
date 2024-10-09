// 1. Object Literals: {}
const user = {
    name: "michael",
    age: 25,
    country: 'usa',
    ocoupation: "engineer"
};

console.log(user.ocoupation)

// 2. constructor function

function Car(brand, model, price) {
    this.brand = brand,
    this.model = model,
    this.price = price
}

const c1 = new Car("BMW", "520d", 10000);
const c2 = new Car("Audi", "Q7", 15000);
const c3 = new Car("BMW", "520d", 10000);

console.log(c1.brand, c1.model, c1.price)
console.log(c2.brand, c2.model, c2.price)

// 3 class style:
class Customer {
    constructor(name, product) {
        this.name = name;
        this.product = product;
    } 

    addToCart() {
        console.log(`${this.product} added to cart`)
    }
}

// instance iof the class:
const cust1 = new Customer("Naveen", "Apple MacBook Pro")
console.log(cust1.product);
console.log(cust1.name);
cust1.addToCart();

// 4. object.create(): with some prototype object

const employeePrototype = {
    printInfo:function() {
        console.log(`hello emp name is ${this.name}`)
    }
};

const e1 = Object.create(employeePrototype)
e1.name="John"
e1.printInfo()

// 5. using factory functions: returns a function
function createDepartement(deptName, hod) {
    return {
        deptName: deptName,
        hod: hod,
        getDepartmentInfo:function() {
            console.log(`hello dept name is ${this.deptName} and hod is ${this.hod}`)
        }
    }
}

const dept1 = createDepartement("physics", "H C Verma")
const dept2 = createDepartement("maths", "R C Sharma")
dept1.getDepartmentInfo();
dept2.getDepartmentInfo();
console.log(dept1.deptName + " " + dept1.hod)