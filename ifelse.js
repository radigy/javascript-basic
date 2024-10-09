// function checkAge(age) {
//     if(age >= 18) {
//         console.log("You are old enough to vote")
//     }
//     else {
//         console.log("Sorry you must be 18")
//     }
// }

// checkAge(18)
// checkAge(2)

// //
// function checkNumber(number) {
//     if (number > 0 ) {
//         console.log("number is positive")
//     }
//     else if ( number < 0 ) {
//         console.log("number is negative")
//     }
//     else {
//         console.log("number is zero")
//     }
// }
// checkNumber(10)
// checkNumber(-2)
// checkNumber(0)

// // nested if-else:

// function checkGrade(score) {
//     let grade
//     if (score >= 90) {
//         grade = 'A'
//     }
//     else {
//         if (score >= 80) {
//             grade = 'B'
//         }
//         else {
//             if (score >= 70) {
//                 grade = 'C'
//             }
//             else {
//                 grade = 'D'
//             }
//         }
//     }
//     console.log("Grade is", grade)
// }

// checkGrade(99)

let browser = "chrome"
if (browser == "chrome") {
    console.log("launch chrome")
}
if (browser == "firefox") {
    console.log("launch firefox")
} 
if (browser == "edge") {
    console.log("launch edge")
}
else {
    console.log("please pick right browser")
}

// if else if to fix propblem

// let browser = "edge"
// if (browser == "chrome") {
//     console.log("launch chrome")
// }
// else if (browser == "firefox") {
//     console.log("launch firefox")
// } 
// else if (browser == "edge") {
//     console.log("launch edge")
// }
// else {
//     console.log("please pick right browser")
// }