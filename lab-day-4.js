// write a for loop that outputs " I will nver give up"


// template litteral
for (let i = 0; i < 10; i++){
    let counter = i +1 
    output = 'I will never give up'
    console.log(`Count # ${counter}, ${output}`)
}


// create a function that returns the number of vowels in a given string

const vowelList = ['a','e','i','o','u']
count = 0
function countVowels(text=""){
    for(let i = 0; i < text.length; i++){
        for(let j = 0; j < vowelList.length; j++){
            if (vowelList[j] == text[i].toLowerCase()){
                count++
            }

        }
    } 
    return console.log(`There are ${count} vowels`)
}

countVowels('aeioUu')

// const vowelCount = yourString => console.log(yourString.length)
// vowelCount('sir')