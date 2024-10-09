// 1. every 

let num = [1,2,3,4,5]
let flag = num.every((e) => e<10)
console.log(flag)

// 2. some 
let number = [1,2,3,4,5]
let fg = number.some((e) => e  % 2 === 0)
console.log(fg)

// 3. find()
let total = [1,3,7,9]
let fe = total.find((e) => e%2===0) 
console.log(fe)

// 4. indexOf():
let arr = ['apple', 'banana', 'mango', 'pear']
let indexof_str = arr.indexOf('mango')
console.log(indexof_str)

// 5. lastIndexOf():
let fruits = ['apple', 'banana', 'mango', 'apple', 'pear']
let lastApple = fruits.lastIndexOf('apple')
console.log(lastApple)

// 6. reverse()
let frts = ['apple', 'banana', 'mango', 'apple', 'pear']
reverseFruits = frts.reverse()
console.log(reverseFruits)

//7. sort()
let products = ['macbook', 'imac', 'samsung', 'canon', '123test', 'Tshirt']
let productsSorted = products.sort()
console.log(productsSorted)

