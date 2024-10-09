const randomNumberPromise = new Promise((resolve, reject) => {
    // async operation:
    setTimeout(() => {
        const randomValue = Math.random();
        if(randomValue> 0.5) {
            resolve(randomValue);
        } else {
            reject(new Error("value is too small!"));
        }
    }, 2000) //delay of 2 seconds
})

randomNumberPromise
    .then(result => { // handler
        console.log("promise is fulfilled with value: ", result)
    })
    .catch(error => { // handler
        console.error("your promise is rejected with: ", error)

    })