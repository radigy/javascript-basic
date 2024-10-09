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

Promise.allSettled([getData1(), getError()])
    .then(results => {
        results.forEach(result => {
            if(result.status === 'fulfilled') {
                console.log("value: ", result.value);
            } else {
                console.log("reason for rejection: ", result.reason)
            }
        })
    })
