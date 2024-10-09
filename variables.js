// 1. var

var x = 10
function test() {
    var y = 20
}

console.log(x)

var pop = "hi js"
function rel() {
    var top = "hello js"
}

console.log(pop)
// console.log(top)

var browser = "chrome"
var browser = "firefox"
browser = "edge"
console.log(browser)

///
var g
console.log(g)  //undefined
g = "hello world"
console.log(g)

var flag = "hey navenn";
var t1 = 4;

if (t1 > 3) {
    var flag = "hey tom"
}
console.log(flag)

// let
// scope: block scoped
// {}

let m = "hey navenn"
let time = 4

if (time > 3) {
    let mesg = "hey rad"
    console.log(mesg)
}
//console.log(mesg) // fail couse let is block scope
console.log(m)

let len = 4
len = 5 //let len couse error, cannot declare let twice
console.log(len)

//const
const mg = "hey naveen"
//mg = "hey tom"
console.log(mg)

const days = 7;
// days = 10
console.log(100* days)






