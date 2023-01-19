/*1. Write a function that takes an integer minutes and converts it to seconds.

Examples
convert(5) ➞ 300

convert(3) ➞ 180

convert(2) ➞ 120

Don't forget to return the result.

2. Write a function that converts hours into seconds.

Examples
howManySeconds(2) ➞ 7200

howManySeconds(10) ➞ 36000

howManySeconds(24) ➞ 86400
Notes
60 seconds in a minute, 60 minutes in an hour
Don't forget to return your answer.

3.Create an SQL with your favorite dishes and cuisines. 
*/

function convert (minutes){
    return minutes * 60
}

function howManySeconds (hours){
    return (hours * 60 * 60)
}
