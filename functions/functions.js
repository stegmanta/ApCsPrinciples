// function - name sequence of code, repeated, reused whenever meeded
console.log("running code")
// function doStuff(){
//     console.log("runnin doing stuff function")
// }

// function sayHi(name){
//     console.log(`sup homie slice, ${name} `)
// }

// function hasBeenClicked(){
//     console.log(`The button was clicked a total of ${clickCount} times`)
//     clickCount++;
// }

let clickCount = 0
let cookiePicEl = document.getElementById("cookiePic")
let scoreEl = document.getElementById("score")
let doubleButton = document.getElementById("double")
let cookieMonsterPicEl = document.getElementById("cookieMonsterPic")
let cookieMonsterTextEl = document.getElementById("cookieMonsterText")
let noMorePointsTextEl = document.getElementById("tooManyPoints")
let secondCookieButtonEl = document.getElementById("secondCookieButton")
let secondCookiePicEl = document.getElementById("cookiePicTwo")
// let input = document.querySelector(`input`)
// console.log(doubleButton)
let clickChange = 1
let timesCKeyPressed = 1
let timesCookieButtonPressed = 0

let cookiePic2El = document.getElementById("cookiePic2")
let cookiePic3El = document.getElementById("cookiePic3")
let cookiePic4El = document.getElementById("cookiePic4")
let cookiePic5El = document.getElementById("cookiePic5")
let cookiePic6El = document.getElementById("cookiePic6")

// let cookie = 1
// let cookie2 = 2
// let cookie3 = 3
// let cookie4 = 4
// let cookie5 = 5
// let cookie6 = 6

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor
    (max));
}


function cookieClicked(){
    console.log(`The cookie was clicked a total of ${clickCount} times`)
    let rand = getRandomInt(6)
    console.log(rand)
    clickCount+= clickChange
    scoreEl.innerHTML = clickCount

    if(clickCount >= 20){
        if(clickCount < 4999){
            if(clickChange === 1){
                doubleButton.classList.remove(`remove`)
                timesCookieButtonPressed = 1
                // console.log(`the click change is ${clickCount}`)
            }
        }
    }

    // if(clickChange === 1 || clickChange === 2 && clickCount % 5 === 0){
    //     console.log(`the click change is ${clickChange} and the click count is ${clickCount}`)
    // }
    if(clickCount % 5 === 0){
        // console.log(`looks like you clicked 5 times`)
        if(rand === 2){
            cookiePicEl.classList.add(`remove`)

            cookiePic2El.classList.remove(`remove`)
            cookiePic2El.addEventListener("click", cookieClicked)
        }else if(rand === 3){
            cookiePicEl.classList.add(`remove`)
            cookiePic2El.classList.add(`remove`)

            cookiePic3El.classList.remove(`remove`)
            cookiePic3El.addEventListener("click", cookieClicked)

        }else if(rand === 4){
            cookiePicEl.classList.add(`remove`)
            cookiePic2El.classList.add(`remove`)
            cookiePic3El.classList.add(`remove`)

            cookiePic4El.classList.remove(`remove`)
            cookiePic4El.addEventListener("click", cookieClicked)
        }else if(rand === 5){
            cookiePicEl.classList.add(`remove`)
            cookiePic2El.classList.add(`remove`)
            cookiePic3El.classList.add(`remove`)
            cookiePic4El.classList.add(`remove`)

            cookiePic5El.classList.remove(`remove`)
            cookiePic5El.addEventListener("click", cookieClicked)

        }else if(rand === 6){
            cookiePicEl.classList.add(`remove`)
            cookiePic2El.classList.add(`remove`)
            cookiePic3El.classList.add(`remove`)
            cookiePic4El.classList.add(`remove`)
            cookiePic5El.classList.add(`remove`)

            cookiePic6El.classList.remove(`remove`)
            cookiePic6El.addEventListener("click", cookieClicked)

        }else{
            console.log(`got the same number as first`)
        }
    }

    if(clickCount >= 5000){
        cookieMonsterTextEl.classList.add(`remove`)
        cookieMonsterPicEl.classList.add(`remove`)
        noMorePointsTextEl.classList.remove(`remove`)
        clickChange = 1
    }

    if(clickCount >= 5050){
        noMorePointsTextEl.classList.add(`remove`)
    }

    if(clickCount >= 400){
        if(timesCookieButtonPressed === 0){
        secondCookieButtonEl.classList.remove(`remove`)
        }
    }

}



document.addEventListener("keypress", logKey)
cookiePicEl.addEventListener("click", cookieClicked)
scoreEl.innerHTML = `Clicked ${clickCount} times`
doubleButton.addEventListener("click", doubleClicked)
secondCookieButtonEl.addEventListener("click", secondCookieButtonClicked)

function doubleClicked(){
    clickCount = clickCount-10
    clickChange = 2
    doubleButton.classList.add(`remove`)
    scoreEl.innerHTML = clickCount
}

function secondCookieButtonClicked(){
    clickCount = clickCount-200
    timesCookieButtonPressed = 2
    secondCookieButtonEl.classList.add(`remove`)
    secondCookiePicEl.classList.remove(`remove`)

}


function logKey(e){
    // console.log(`key code pressed ${e.code}`)

        if(e.code === "KeyC"){

            if(timesCKeyPressed === 1){
            // console.log("hi")
            cookieMonsterTextEl.classList.remove(`remove`)
            cookieMonsterPicEl.classList.remove(`remove`)
            clickChange = 500
            timesCKeyPressed = 2
            // scoreEl.innerHTML = clickCount
            }
        }

        if(e.code === "Space"){
            if(timesCookieButtonPressed === 2)
            secondCookieClicked()
        }
}

function secondCookieClicked(){
    clickCount++
    scoreEl.innerHTML = clickCount
}



// console.log(getRandomInt(10))




console.log("End of script")

