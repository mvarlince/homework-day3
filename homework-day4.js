//1. Create a function that takes an array of numbers and returns a new array with the square of each number.

function eachNumSquared(numList){
    let numSquared = []
    for (let i = 0; i < numList.length; i++){
        numSquared.push(numList[i] ** 2)
    }
    return console.log(numSquared)
}

const tryList = [1,2,3,4,5,6,9]
eachNumSquared(tryList)


// // 2. Create a function that takes in a number of two-pointers and three-pointers made and returns a basketball team’s total score. Console.log the results.
const teamScore = (twoP, threeP) => console.log(twoP + threeP)

teamScore(2,4)


//3. Create a function that converts a string to uppercase letters. Console.log the results. 
const convertToUpperCase = (text="") => console.log(text.toUpperCase())

const sentence = 'convert this text to Uppercase'
convertToUpperCase(sentence)


// old function method
function cToUpp(strings = ''){
    return console.log(strings.toUpperCase())
    // return message
}

const message = 'convert this text to Uppercase'
cToUpp(message)




