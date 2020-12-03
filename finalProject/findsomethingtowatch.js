console.log("running code")

let timesButtonClick = 0
let videoGeneratorButton = document.getElementById("videoGenerator")
let reccomender = document.getElementById("reccomendation")

videoGeneratorButton.addEventListener("click", generateVideo)


function generateVideo(){
    console.log("here is vid lol")
    console.log(reccomender)
    reccomender.href="https://www.youtube.com/watch?v=F5WWyyYG018"
    // use format like above to create a list of hrefs then choose randomly from the list
    reccomender.innerHTML = "this will show a reccomended video to click"
}