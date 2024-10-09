// // 1.
// // f1 -- resolve
// // f2 -- resolve
// // f3 -- resolve 

// const function1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             //resolve("Data from funtion 1");
//             const data = [1,2,3,4,5]
//             resolve(data)
//         }, 2000)
//     })
// } 

// const function2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = [6,7,8,9]
//             resolve(data)
//         }, 2000)
//     })
// } 

// const function3 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = [10,11,12,13,14]
//             resolve(data)        
//         }, 2000)
//     })
// } 

// Promise.all([function1(), function2(), function3()])
//     .then(dataArray => {
//         console.log("All data from diff functions:  ", dataArray)
//     })
//     .catch(error => {
//         console.log("Error in promise", error)
//     })


// case 2:
// f1 -- resolved
// f2 -- rejected 

const getData1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from getData");
        }, 2000)
    })
} 

const getError = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error: data is not available from getError");
        }, 2000)
    })
} 


Promise.all([getData1(), getError()])
    .then(dataArray => {
        console.log("All data fetched: " + dataArray);
    })
    .catch(error => {
        console.log("Error occured: ", error);
    })