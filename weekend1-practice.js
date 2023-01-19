//1. Create a function which returns the number of true values there are in an array.
function trueVals(arr){
    let result = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 'true'){
            result++
        }
    }
    return result
}

// solve with array below. USE SWITCH
const testArray = [ 'True', false, false, 'true', 'false', 1, 'false', 'false', true, 'true', 0, 'true', 'false' ]
console.log(trueVals(testArray))

// //2. Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array that combines both.

// USE SPREAD OPERATOR - PRACTICE

// function combineTwoArrays(a1,a2){
//     result = a1.concat(a2)
//     return result
// }

// test1 = ['a', 'b', 'c']
// test2 = ['d','e', 'f']

// console.log(combineTwoArrays(test1,test2))


// 3. You are given 2 arrays, one called shoppingList and one called cart.
// Example: Let shoppingList = [‘beer’, ‘milk’, ‘wine’, ‘bananas’, ‘sugar’]
// Let cart = [‘milk’, ‘beer’]
// Create a new version of shoppingList where the items in the cart have been removed. 
// function combineArrays(shoppingList,cart){
//     for (let i = 0; i < cart.length; i++){
//         shoppingList.push(cart[i])
//     }
//     return shoppingList
// }

// const shoppingListTest = ['beer’', 'milk’', 'wine’', 'bananas’', 'sugar’']
// const cartTest = ['milk’', 'beer’']

// console.log(combineArrays(shoppingListTest,cartTest))


function newSl (sL, c){
    let editSl = []
    let counter=0;
    for (let i = 0; i <sL.length; i++){
        for (let j = 0; j < c.length; j++){
            if (c[j] !== sL[i]){
                editSl[counter] = sL[i]
                counter++
            }
        }
    }
    return editSl
}

const testSl = ['a', 'b', 'c', 'd']
const testC = ['c']

console.log(newSl(testSl,testC))