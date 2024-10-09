const numbers = [1,2,3]
const [a,b,c] = numbers
console.log(a)
console.log(b)
console.log(c)

const lang = ["Java", "JS", "Python", "Ruby", "GO"]
const [p,q, ...testLang] = lang 
console.log(p)
console.log(q)
console.log(testLang)

const user = {
    age: 30,
    firstName: "tom",
    lastName: "nazwisko"
}

const {age, firstName, city="LA", lastName} = user
console.log(age)
console.log(firstName)
console.log(lastName)
console.log(city);



function printUserName({lastName}) {
    console.log(lastName)
}

const person = {
    firstName : "john",
    lastName: "doe"
}


printUserName(person)