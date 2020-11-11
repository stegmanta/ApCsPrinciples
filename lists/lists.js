console.log("start of code")

//scroll to bottom for function and main control

//     index   0      1     2       3          4
let names = [`Bob`,`Jim`,`George`,`Timmy`, `Samantha`,`Dan`]
let zooAnimals = [`Tiger`, `Lion`, `Bear`,`Penguin`,`Gorilla`, `Elephant`,`Curious George`]
let nums = [3,4,4,7,8,6,20,20,40]
// //length = 5

// // names[1] = "jomama"

// for( let i = 0; i < names.length; i++){
//     console.log(names[i])
// }
// console.log(`the length of the names list is ${names.length}`)


//sum of the list
function sumOfList(nums){
let sum = 0;
let evenSum = 0;

for(let i = 0; i < nums.length; i++){
    num = nums[i]
    sum = num + sum
    //even sum
    if(nums[i] % 2 == 0){
        evenSum = evenSum + num
    }
}

console.log(`the sum of the number list is ${sum} and the even sum is ${evenSum}`)
}
//way faster way of printing all of the names
function printNames(){
// names.forEach(function(name, i){
//     console.log(name, i)

// })

// or do this 
names.forEach((name, i) =>{
    console.log(name, i)

})
}

// what is the index of the first even numbers
function findIndex(){
let index = -1
nums.forEach((num, i) =>{

    if(num % 2 == 0 && index == -1){
        index = i

    }
})

console.log(`the first even number is at spot ${index}`)
}
//slightly changed criteria
function removeWord(name){
removeName = window.prompt(`type what name to remove from these names ${names}`)
let newNames = names.filter((name) => {
    return name != removeName

})

console.log(`the new list of names without ${removeName} are ${newNames}`)
}

// make double the numbers using map function
function makeDouble(){
let doubleNums = nums.map((num)=>{
    return num * 2
})

console.log(` the nums list doubles is ${doubleNums}`)
}

// count odd numbers in nums
function countAmountOdd(){
let amountOfOdd = 0;

let oddNums = nums.forEach((num, i) =>{
    if(num % 2 > 0){
        amountOfOdd++ 
    }
})
console.log(`the amount of odd numbers in the nums list is ${amountOfOdd}`)

console.log(`the maximum of the nums list is ${Math.max(...nums)}`)
console.log(`the minimum value of the nums list is ${Math.min(...nums)} `)
}

// check if favorite animal is in the zoo 
function zooAnimalChecker(zooAnimalsList){
zooAnimalsList = zooAnimals
let favAnimal = window.prompt("Type in your favorite animal (use proper caps)")
var hasAnimal = false
var done = false
zooAnimals.forEach((zooAnimal, i)=>{
    if(zooAnimals[i] === favAnimal){
        if(!done){
        // console.log(hasAnimal)
        hasAnimal = true
        // console.log(`${hasAnimal} the ${zooAnimals[i]} is the same as ${favAnimal}`)
    }else{
        hasAnimal = false
        // console.log(hasAnimal)
        // console.log(`${hasAnimal} the ${zooAnimals[i]} is not the same as ${favAnimal}`)
    }
}
})
if(hasAnimal){
    console.log(`your favorite animal the ${favAnimal}, IS at the zoo`)
}else{
    console.log(`no your favorite animal the ${favAnimal}, IS NOT located at this zoo`)
}

}

//add a zoo animal to the list

// function zooAnimalAdd(zooAnimalList){
//     zooAnimalList = zooAnimals
//     return zooAnimalList.push(window.prompt("Type a zoo animal to be added to the zoo"))
//     console.log(zooAnimals)
// }









// convert a group of tempuratures(nums) to celcius

function convertToCelcius(){
console.log(`the temperatures in farenheit before conversion are ${nums}`)
let celciusNums = nums.map((num) =>{
    return num - 30
})
console.log(`those temperatures in celcius are ${celciusNums}`)
}

// counting how many vowels exist in an inputted name

function findAmountOfVowelsInYourName(word){
word = window.prompt("type your name")
let vowels = [`a`,`e`,`i`,`o`,`u`,`y`,`w`]
let vowelCount = 0
// console.log(word[0])
for(let i = 0; i < word.length; i++){
    for(let j = 0; j < vowels.length; j++){
        if(word[i] === vowels[j]){
            vowelCount++
        }
    }   
}
console.log(`there are a total of ${vowelCount} vowel(s) in your name, ${word}`)
}

function getZooAnimalList(){
    console.log(zooAnimals)
}




// findAmountOfVowelsInYourName()
// convertToCelcius()
// countAmountOdd()
// makeDouble()
// removeWord()
// findIndex()
// printNames()
// sumOfList()
// zooAnimalAdd()WIP
// getZooAnimalList()
zooAnimalChecker()
