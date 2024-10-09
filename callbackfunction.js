//callback function
//async call -- once this task is completed - then only callback function will be called

//basic callback:
function greet(name, callback) {
    console.log('Hello ' + name) //normal/sync step, could be async call
    callback();

}

// callback function
function welcome() {
    console.log("welcome!")
}

greet('Naveen', welcome);

// --------------------------------------
//callback with async function:
function printInfo(name, callback) {
    //async function
    setTimeout(function() {
        console.log("printing info for " + name);
        callback("plz call me back...")
    }, 5000);
}

function displayMessage(msg) {
    console.log(msg)
}

printInfo("Lisa", displayMessage)
