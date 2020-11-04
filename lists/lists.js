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

console.log(`the new names are ${newNames}`)


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