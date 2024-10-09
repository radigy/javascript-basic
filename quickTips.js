//1. find unique values from array

const array = [1,2,3,4,2,3,22,6,2,7,7,7,7]
const uniqueArray = [...new Set(array)]
console.log(uniqueArray)

//2. convert integer int to string 
const num = 32;
const numStr = num + '';
console.log(numStr + 10)

//or

const numString = String(num)
console.log(numString+10)

//3. float to int:
const floatNum = 3.76 
const intNum = parseInt(floatNum)
console.log(intNum)

//4. check if a variable is a number
const value = '10';
if(typeof value==='number' && !isNaN(value)) {
    console.log(value + ' is a number')
}
else {
    console.log(value + ' is not a number')
}

//5. swap variable values
let a = 5;
let b= 10;
[a,b] = [b,a]
console.log(a,b)

//6. check if an Object has a property
const user = {
    name: "michael",
    age: 25,
};
if(user.hasOwnProperty('age')) {
    console.log('user has name property')
}

//7. remove falsy value from the array: (false, 0, "", null, undefined, NaN)
const values = [0,1,false,2,'',3,null,undefined, NaN,4];
const newValues = values.filter(Boolean);
console.log(newValues)

//8. String --> UpperCase, lowercase 
const str = 'string'
const upperStr = str.toUpperCase()
console.log(upperStr)

//9. check if array contains a value:
const lang = ['java', 'javascript', 'python', 'ruby']
if(lang.includes('python')){
    console.log('found')
}

//10. check if an array is empty
const empty = [];
if(empty.length === 0){
    console.log('Array is empty')
}

//11. generate a random number
const min = 10;
const max = 20;
const randomNumber = Math.floor(Math.random() * (max-min+1) + min)
console.log(`random number ${randomNumber}`)

//12. String to number:
const strNumber = '32.01';
const x1 = parseFloat(strNumber)
console.log(x1)

//13. Join array elements into a String:
const words = ['Hello', 'Naveen'];
const sentence = words.join('-')
console.log(sentence)

// 14. get object property 
const person = {
    name: "tony",
    age: 22,
};

const asd = person['name']
console.log(asd)

// 15. clone an array or object:
const marks = [10,20,30,50,66,70];
const marksDuplicate = [...marks]
console.log(marksDuplicate)
const userDuplicate = {...user }  //spread operator
console.log(userDuplicate)

// 16. convert object to array 
const employee = {
    name: "tony",
    age: 25,
};

//a. keys array:
const keysArray = Object.keys(employee);
console.log(keysArray)

//b. values array:
const valuesArray = Object.values(employee);
console.log(valuesArray)

//c. key-value array
const keyValueArray = Object.entries(employee);
console.log(keyValueArray)

// 17. get current date and time:
const currentDate = new Date();
console.log(currentDate.toLocaleString())

// 18. check variable is defined
let i;
if(typeof i === 'undefined'){
    console.log('variable not defined')
}

// 19. truncate an array
const testing = [0,1,2,3,4,5,6,7]
testing.length = 3;
console.log(testing)

// 20. last item in array
const pop = [0,1,2,3,4,5,6,7]
const n1 = pop.slice(-1)
console.log(n1)


