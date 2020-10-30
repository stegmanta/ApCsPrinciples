console.log("running code");



function setup() {
    createCanvas(800, 800);
}


let size = 50


function draw(){
    background(50)
    if(mouseIsPressed){
    console.log(`x is ${mouseX} and y is ${mouseY}`)
    }

    fill('hotpink')
    noStroke()

    for(let row = 0; row < 8; row++){// figure out wht this is

        for(col = 0; col <= 8; col++){
            if(col % 2 == 0){
                rect(col, 50+60*row, size, size)
                // console.log("=")
            }else{
                // console.log("-")   
            }
        }
    }
}


// for(i = 0; i <= 64; i++){
//     if(i % 2 == 0){
//         console.log("=")
//     }else{
//         console.log("-")   
//     }
// }


