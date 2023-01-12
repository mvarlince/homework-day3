/*

HOMEWORK DAY 3

Reminder: Today’s homework must be pushed to GitHub(I recommend that you create a Homework repo to keep all future homework organized :blush:)
Using your loop of choice. Create a function that prints the pyramid below. (Show your personality by using your favorite emoji)
:heart:
:heart::heart:
:heart::heart::heart:
:heart::heart::heart::heart:
:heart::heart::heart::heart::heart:

2. Create a function that removes the first element of the array below and adds “kiwi” to the end of the array
let favoriteFruits = [“mango”, “lychee”, “rambutan”, “papaya”]

:sparkles::sparkles:BONUS :sparkles::sparkles:
Write a function named assignGrade, that takes one argument, a number score.
Return a grade for the score, either “A,” “B,” “C,” “D,” or “F.” Invoke that function for a 
few different scores and log the result to make sure it works. (edited)

*/


// 1


// 2
function editFruitList(){
   let favoriteFruits = ['mango', 'lychee', 'rambutan', 'papaya']
    favoriteFruits.shift() && favoriteFruits.push('Kiwi')
    return console.log(favoriteFruits)
}

editFruitList()


// Bonus
function assignGrade(score){
    switch(score > 0){        //score is an expression
        case score >= 90:
            console.log('A') 
            break
        case score >=79 && score <= 89:
            console.log('B') 
            break
        case score >=69 && score <=79:
            console.log('C') 
            break
        case score >=59 && score <= 69:
            console.log('D') 
            break
        case score < 69:
            console.log('F') 
        default:
            console.log('Enter grade')    
            break 
                    }
    }

assignGrade(99)