//Write a function that takes your age in years and returns your age in minutes.
const ageYearsToMin = years => console.log(`Your age in minutes is ${years * 525600} minutes`)

ageYearsToMin(11)



// Write a function that takes in an array of numbers and returns the sum of all even numbers.
function evenSum(arr){
    newArr = 0
    for (let i = 0; i <= arr.length; i++){
    if (arr[i] % 2 == 0){
        newArr += arr[i] 
        }
         }
    return newArr
    }

    testArr = [2,2,2]
    console.log(evenSum(testArr))

