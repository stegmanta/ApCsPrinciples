console.log("I'm waiting to speak to joe-mama")
const drawing = window.prompt("what would you like to draw(either stickman, or godzilla) WIP")


function setup(){
// one time initial work
createCanvas(800, 800)
}

// function drawWithMouse(){
//     if(mouseIsPressed){
//         fill(0)
//     }else{
//         fill(255)
//     }
//     ellipse(mouseX, mouseY, 80,80)

// }

function draw(){
    if(mouseIsPressed){
        console.log(`the x cordinate is ${mouseX} and the y coordinate is ${mouseY}`)
    }
    if(drawing === "stickman"){
        background(700)

        fill('#DDDDEE')

        ellipse(400,200,100,100) //head
        line(374, 472.5625, 397, 249.56)//body
        line(390, 312.56, 572, 278.56)//right arm
        line(390, 312.56, 250, 410.56)//left arm
        line(374, 470.56, 286, 597.56)// left leg
        line(374, 470.56, 522, 491.56)
        // ellipse(100,400,75,75)
        }else if(drawing === "godzilla"){
            background(700)
            fill('#DDDDEE')
            ellipse(100,400,75,75)

        }else{
            console.log("that drawing does not exist")
        }
    }