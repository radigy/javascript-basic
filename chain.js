
function getEvenNumber(value, delay) {
    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            if(value%2 == 0) {
                resolve(value);
            }
            else {
                reject(new Error("value is not even number"))
            }
        }, delay)
    })
}

// promise chain:
getEvenNumber(4, 1000)
    .then(result => {
        console.log("step 1: getting the result: ", result)
        return getEvenNumber(3, 2000)
    })
    .then(result => {
        console.log("step 2: getting the result: ", result)
    })
    .catch(error => {
        console.error("promise chain error ", error.message)
    });

