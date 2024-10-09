// for loop
for(let i=1; i<=10; i++){
    console.log(i)
}

console.log('----------------')
// for...of loop
const array = [5,6,7,8,9]

for (const e of array) {
    console.log(e)
}
console.log('----------------')

//
for(let i=0; i<array.length; i++) {
    console.log(array[i])
}
console.log('----------------')

// while loop
let p = 1;
while(p<=10) {
    console.log(p)
    p++
}
console.log('----------------')

//
let l = 2
while(l<10){
    console.log(l)
    l = l + 2
}

console.log('----------------')

// 
let h = 1;
do{
    console.log(h)
    h++
}
while(h <=10);
console.log('----------------')

//break
// 1 to 100; print hi when you see multiplication of 5 and break;

let num = 1
while(num<=100) {
    if (num % 5 == 0) {
        console.log('hi')
        num++
    } else { 
        console.log(num)
        num++
    }

}
console.log('----------------')

// 
const browser = ["chrome", "firefox", "edge", "IE"]

for (const e of browser) {
        if (e == "edge") {
            console.log("launch edge...")
            break
        }
}
console.log('----------------')

// for of loop an object

const user = {
    name: "John Doe",
    age: 30, 
    city: "New York City",

}

for (const key in user) {
    console.log(key + " : " + user[key]);
}
console.log('----------------')

const br = ["chrome", "firefox", "edge", "IE"]

for (const ele in br){
    console.log(ele + ' ' + br[ele])
}
