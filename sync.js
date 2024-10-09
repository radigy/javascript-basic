//sync vs asyn behaviour:
//sync:
// console.log("start")
// for (let i=0; i<3000; i++) {
//     console.log(i)
// }
// console.log("end")

//async:
console.log("start")
setTimeout(() => {
    console.log("time out is done");
}, 10000) 
console.log("end")

