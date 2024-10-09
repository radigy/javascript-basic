// 1. map
let numbers = [1,2,3]


doubleNumers = numbers.map((e) => e * 2)
console.log(doubleNumers)

// 2. F -> C
// (F-C) * (5/9)
let fahTemp = [32, 68, 86, 104,212]

function fahToCel(fah){
    return (fah - 32) * (5/9);
}

let celciousTemp = fahTemp.map(fahToCel)
console.log(celciousTemp)

//2. filter
let num = [1,2,3,4,5,6,7,8,9,10]
evenNum = num.filter((e) => e % 2 === 0)
console.log(evenNum)

let employee = [
    {
        name: "John",
        age: 30,
        gender: "male"
    },
    {
        name: "Ania",
        age: 12,
        gender: "female"
    },
    {
        name: "Piotr",
        age: 16,
        gender: "male"
    },
    {
        name: "Zuza",
        age: 22,
        gender: "female"
    },
    {
        name: "Tomek",
        age: 54,
        gender: "male"
    }
]
let femaleEmpOver20 = employee.filter((emp) => {
    return emp.gender === "female" && emp.age > 20
})
console.log(femaleEmpOver20)

// 3. reduce
let numb = [1,2,3,4,5] //count - 15

let sum = numb.reduce((acc, num) => acc+num, 0) //
console.log(sum)

// max number in array:
let top = [10,5,25,8,30,15] //30
top.reduce((max, num) => {
    if(num > max) {
        return num;
    } else {
        return max;
    }
}, top[0])

// cart : name, price
let cartItems = [
    {
        name: "Jeans",
        price: 500
    },
    {
        name: "Shirt",
        price: 300
    },
    {
        name: "Shoes",
        price: 1000
    },
    {
        name: "Hat",
        price: 100
    },
    {
        name: "T-shirt",
        price: 400
    },
]

let totalCost = cartItems.reduce((total, item) => total+item.price, 0)
console.log(totalCost)