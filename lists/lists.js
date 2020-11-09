console.log("start of code")


//     index   0      1     2       3          4
let names = [`Bob`,`Jim`,`George`,`Timmy`, `Samantha`]
//length = 5

// names[1] = "jomama"

for( let i = 0; i < names.length; i++){
    console.log(names[i])
}
console.log(`the length of the names list is ${names.length}`)


//sum of the list

let nums = [3,4,4,7,8,6,20,20,40]
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

//way faster way of printing all of the names

names.forEach(function(name, i){
    console.log(name, i)

})

// or do this 
names.forEach((name, i) =>{
    console.log(name, i)

})

// what is the index of the first even numbers

let index = -1
nums.forEach((num, i) =>{

    if(num % 2 == 0 && index == -1){
        index = i

    }
})

console.log(`the first even number is at spot ${index}`)

//slightly changed criteria

let newNames = names.filter((name) => {
    return name != `Dan`

})

console.log(`the new names without Dan are ${newNames}`)


// make double the numbers using map function


let doubleNums = nums.map((num)=>{
    return num * 2
})

console.log(` the nums list doubles is ${doubleNums}`)


// count odd numbers in nums
let amountOfOdd = 0;

let oddNums = nums.forEach((num, i) =>{
    if(num % 2 > 0){
        amountOfOdd++ 
    }
})

console.log(`the amount of odd numbers in the nums list is ${amountOfOdd}`)

console.log(`the maximum of the nums list is ${Math.max(...nums)}`)
console.log(`the minimum value of the nums list is ${Math.min(...nums)} `)


// check if favorite animal is in the zoo 

let zooAnimals = [`Tiger`, `Lion`, `Bear`,`Penguin`,`Gorilla`, `Elephant`]
let favAnimal = "Elephant"
var hasAnimal = false


zooAnimals.forEach((zooAnimal, i)=>{
    if(zooAnimals[i] === favAnimal){
        hasAnimal = true
    }else{
        hasAnimal = false
    }
})

if(hasAnimal){
    console.log(`your favorite animal the ${favAnimal} is at the zoo`)
}else{
    console.log(`no your fav animal the ${favAnimal} is not located at this zoo`)
}


// convert a group of tempuratures(nums) to celcius

console.log(`the temperatures in farenheit before conversion are ${nums}`)


let celciusNums = nums.map((num) =>{
    return num - 30
})

console.log(`those temperatures in celcius are ${celciusNums}`)


// counting how many vowels exist in the following sentence



function findAmountOfVowels(word){
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
console.log(`there are a total of ${vowelCount} vowel(s) in the word ${word}`)
}
findAmountOfVowels()
