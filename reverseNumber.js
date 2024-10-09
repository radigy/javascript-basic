//12345 -> 54321

function reverseNumber(num) {
    if (num>=0 && num<=9) {
        return num;
    }

    let reverseNumber = 0;
    let reminder = 0;

    while(num!=0) {
        reminder = num % 10
        reverseNumber = reverseNumber * 10 + reminder
        num = Math.floor(num / 10)
    }

    return reverseNumber
}

console.log(reverseNumber(2223))