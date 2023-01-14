// // Write a simple temperature converter. Given a temp in C. output the equivlent temp in F
// // To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.
// function toFahrenheit(celcius) {
//     let calc = (celcius*1.8) + 32;
//     return calc; 
// }

// let cel = 23
// console.log(`${cel}C° is ${toFahrenheit(cel)} F°`)


// // convert one currency to USD
// // 4726 yen is $11 US
// function convertToUSD(rupee){
//     let calc = rupee * 0.012
//     return calc
// }

// let rup = 25307

// console.log(`${rup} Rupee is $${convertToUSD(rup).toFixed(2)}US`)


//given a number of rows and column, output a grid of *

// function spitGrid(rows, columns) {
//     for (let i = 0; i < rows; i++) {
//         let row = '';
//         for (let k = 0; k < columns; k++) {
//             row += '* ';
//                 }
//         console.log(row)
//     }
// }
// spitGrid(2, 9)


// Create a multiplication grid for |x| to 10 x 10 using loops

// function mathGrid(x, y) {
//     let result = ''

//     for (let i = 1; i < x + 1; i++) {
//         for (let k = 1; k < y + 1; k++) {
//             result += i * k + '   '
//     }
//     result += ' \n\n'
// }
//     return result
// }

// console.log(mathGrid(10,10))




// function mathGrid(x, y) {
//     let result = 0
//     for (let i = 0; i < x; i++) {
//         for (let k = 0; k < y; k++) {
//             let result = (x[i] * y[i]);
//             }
//     }
//     return result
// }

// console.log(mathGrid(2, 9))


//random string, cap first letter, lowercase all others, and add a period

// function grammar(randomString){

//     randomString[0].toUpperCase()
//     let stringThree = randomString.toLowerCase(randomString.substring(1,randomString.length))
//     let randomString2 = stringThree + '.'

//     return randomString2
// }

// console.log(grammar('aDFGHSDFGSDFGSDFGS'))



// given a number of rows and columns, output a grid of *

// function nestedLoopPractice(rows, columns){
//     for(let i = 0; i < rows; i++){
//         rows = ' '
//         for(let j = 0; j < columns; j++){
//         rows += '*'
//         }
//      console.log(rows)
//     }
// }

// nestedLoopPractice(5,5)
// Create a multiplication grid for |x| to 10 x 10 using loops

// function mulpGrid(x,y){
//     let sir = ''
//     for (let i = 0; i < x; i++){
//         for (let j = 0; j < y; i++){
//             sir += i * j + ' '
//         }
//         sir += ' \n\n'
//     }
//     return sir
// }

// console.log(mulpGrid(5,5))

function mathGrid(x, y) {
    let result = ''

    for (let i = 1; i < x + 1; i++) {
        for (let k = 1; k < y + 1; k++) {
            result += i * k + '   '
    }
    result += ' \n\n'
}
    return result
}

console.log(mathGrid(10,10))