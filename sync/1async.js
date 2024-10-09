const fs = require('fs');
 
fs.readFile("naveen.txt", "utf-8", (error, data)=> {
    console.log(data);
});

console.log("Bye Naveen");