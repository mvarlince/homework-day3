/*
Write a function that prints (console.log) the numbers from 1 to 100. 
But log “Fizz” instead of the number if it is divisible by 3, “Buzz” 
if the number is divisible by 5, and “FizzBuzz” if the number is divisible by both 3 and 5.
*/

// function print1to100 (){
//     counter = 0
//     for (let i = 0; i < 100; i++){
//         counter++
//         switch (true){
//             case counter % 3 == 0 && counter % 5 == 0:
//             console.log(counter, " FizzBuzz")
//             break
//             case counter % 3 == 0:
//             console.log(counter, " Fizz")
//             break
//             case counter % 5 == 0:
//             console.log(counter, " Buzz")
//             break
//             default:
//             console.log(counter)
//         }
//     }
// }

// print1to100()


//

function buzzWord(){
counters = 0
for (let i = 0; i < 100; i++){
counters++
switch (true) {
    case counters % 3 === 0 && counters % 5 === 0:
        console.log(counters," FizzBuzz");
        break;
    case counters % 3 === 0:
        console.log(counters," Fizz!");
        break;
    case counters % 5 === 0:
        console.log(counters," Buzz");
        break;
 default:
    console.log(counters);
            }
    }
}

buzzWord()