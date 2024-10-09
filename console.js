console.log("hello world")
console.error("array error")
console.warn("some warning")
console.info("this is my js code")

console.group("login feature")
console.log("reset")
console.log("login")
console.log("password")
console.groupEnd()

// console.time("print from 1 to N")
// for (let i=1; i<=10000 ;i++) {
//     console.log(i)
// }
// console.timeEnd("print from 1 to N")
// console.clear()

console.count("hello world")
console.count("hello world")
console.count("hello world")

console.assert(20==20, "this is FAILED")

flag = false
console.assert(flag, "this is Failed")

function testMyJob() {
    console.trace()
}

//testMyJob()

console.log("%c I love javascript coding", "color:red; background-color:blue; border:solid")