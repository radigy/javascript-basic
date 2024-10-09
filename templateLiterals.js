const name = "Naveen";
// backticks => ``
const age = 30;

const msg = `hello my name is ${name} and age is ${age}`

console.log(msg)

const multiline = `hi line one 
    line two
    and finally line three`

console.log(multiline)

const a = 10
const b = 20
console.log(`addition of ${a} and ${b} is ${a+b}`)

function getXpath(name) {
    return `//input[@id='${name}']`
}

console.log(getXpath('Naveen\'s'))