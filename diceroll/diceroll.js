console.log("running code")

let playerOne = prompt("what is player one's name")
let playerTwo = prompt("what is player two's name")

let dicePicEl = document.getElementById("dicePic")
dicePicEl.addEventListener("click", roll)
let playerOneEl = document.getElementById("playerOne")
let playerTwoEl = document.getElementById("playerTwo")


playerOneEl.innerHTML = playerOne
playerTwoEl.innerHTML = playerTwo
// console.log(playerOne)

let rollOne = 0
let rollTwo = 0
let totalRoll = 0


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor
    (max));
}

function roll(){
    rollOne = getRandomInt(7)+1
    rollTwo = getRandomInt(7)+1
    totalRoll = rollOne + rollTwo
    console.log(`you rolled a ${rollOne} and a ${rollTwo} which adds to ${totalRoll}`)
}