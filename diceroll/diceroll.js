console.log("running code")

let playerOne = prompt("what is player one's name")
let playerTwo = prompt("what is player two's name")

let dicePicEl = document.getElementById("dicePic")
dicePicEl.addEventListener("click", roll)
let playerOneEl = document.getElementById("playerOne")
let playerTwoEl = document.getElementById("playerTwo")
// let continueButton = document.getElementById("button")
// continueButton.addEventListener("click", buttonClicked)

//messages
let firstMessage = document.getElementById("firstMessage")


let timesButtonClicked = 0


function buttonClicked(){
    if(timesButtonClicked === 1){

    }
    
    timesButtonClicked++
    console.log(timesButtonClicked)
}

let playerOneScoreEl = document.getElementById("playerOneRoll")
let playerTwoScoreEl = document.getElementById("playerTwoRoll")

// let continueButtonEl = document.getElementById("button")
// continueButtonEl.addEventListener("click", instructions)
// let messageOneEl = document.getElementById("messageOne")


// let partOfInstructions = 0;


playerOneEl.innerHTML = playerOne
playerTwoEl.innerHTML = playerTwo
// console.log(playerOne)





// function instructions(){
//     if(partOfInstructions === 0){
//         messageOneEl.classList.remove("remove")
//     }else if(partOfInstructions === 1){

//     }
// }


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor
    (max));
}

//dice roll

let rollOne = 0
let rollTwo = 0
let totalRoll = 0
let playerOneScore = 0;
let playerTwoScore = 0;
let playerTurn = 1;

function roll(){
        if(playerTurn === 1){
            // console.log(`it is player ${playerTurn}'s turn`)
            rollOne = getRandomInt(7)+1
            rollTwo = getRandomInt(7)+1
            totalRoll = rollOne + rollTwo
            playerOneScore = playerOneScore + totalRoll
            playerOneScoreEl.innerHTML = playerOneScore
            playerTurn = 2
            console.log(`player 1 rolled a ${rollOne} and a ${rollTwo} which adds to ${totalRoll}`)
            console.log(`Player 1 now has the score of ${playerOneScore}`)
            console.log(`it is now player ${playerTurn}'s turn`)

            
        }else if(playerTurn === 2){
            // console.log(`it is player ${playerTurn}'s turn`)
            rollOne = getRandomInt(7)+1
            rollTwo = getRandomInt(7)+1
            totalRoll = rollOne + rollTwo
            playerTwoScore = playerTwoScore + totalRoll
            playerTwoScoreEl.innerHTML = playerTwoScore
            playerTurn = 1
            console.log(`player 2 rolled a ${rollOne} and a ${rollTwo} which adds to ${totalRoll}`)
            console.log(`Player 2 now has the score of ${playerTwoScore}`)
            console.log(`it is now player ${playerTurn}'s turn`)
        }
}
