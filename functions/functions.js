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
// console.log(doubleButton)
let clickChange = 1

function cookieClicked(){
    console.log(`The cookie was clicked a total of ${clickCount} times`)

    clickCount+= clickChange
    scoreEl.innerHTML = clickCount

    if(clickCount >= 20){
        if(clickChange === 1){
            doubleButton.classList.remove(`remove`)
        }
    }

}

cookiePicEl.addEventListener("click", cookieClicked)
scoreEl.innerHTML = `Clicked ${clickCount} times`
doubleButton.addEventListener("click", doubleClicked)




function doubleClicked(){
    clickCount = clickCount-10
    scoreEl.innerHTML = clickCount
    clickChange = 2
    doubleButton.classList.add(`remove`)
}





// sayHi("sugma")//alice
// sayHi("deanda")//alice


console.log("End of script")