const fs = require('fs');

const data = fs.readFileSync('naveen.txt', 'utf-8');

console.log(data);

console.log("Bye Naveen");
