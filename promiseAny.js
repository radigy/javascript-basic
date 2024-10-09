const getMessage = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Get message from API 1");
        }, 500)
    })
};

const getUsers = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error: User Data could not be fetched");
        }, 200)
    })
} 

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error: Product Info could not be fetched");
        }, 1000)
    })
} 

Promise.any([getMessage(), getUsers(), getProducts()])
    .then(result => {
        console.log("First successful result: ", result); // Will log the first resolved result
    })
    .catch(error => {
        console.error("All promises rejected: ", error) // Will lof all rejection reasons if all promises rejected
        console.log(error.result)
    })