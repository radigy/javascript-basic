// async functionwithout await

async function f1() {
    console.log("this is async function without await step")
    return 42; //retrun a promise(resolved) on top of 42
} 

f1()
.then(result => {
    console.log(result)
})

// async functionwithout await without await but with error 

async function f2() {
    console.log("this is async funtion with error")
    return blabla()
    // throw new Error("this is my error")
}

// f2().catch(error => {
//     console.log(`the error is ${error}`)
// })

// async function with a resolved/rejected promise

function getInfo() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random()
        setTimeout(()=> {
            if (randomNumber > 0.5) {
                resolve(42)
            } else {
                reject(new Error("wrong value error"))
            }
        }, 2000)
    })
}

async function getNumberInfo() {
    try {
    const result = await getInfo()
    console.log("Result: ", result)
    }
    catch(error) {
        console.log("Error: ", error)
    }
}

// call getNumberInfo()
getNumberInfo()