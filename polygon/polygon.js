console.log(`starting up polygon`)

let points = []
let size = 40
let isDrawing = false



function setup(){
    createCanvas(800,600)
}

function draw(){
    background(`wheat`)
    drawDots()
    drawLines()
    if(isDrawing){
        drawMouseDot()
    }
}

function drawMouseDot(){
    fill(`cyan`)
    if(currentPointIsCloseToFirst) {
        fill(`purple`)
    }

    noStroke()

    circle(mouseX, mouseY, size)

    stroke(`white`)
    strokeWeight(10)

    line(mouseX, mouseY,
        points[points.length-1].x, points[points.length-1].y)
}

function currentPointIsCloseToFirst(){
    return(distance({x: mouseX,y: mouseY}, points[0])< size)// fix distance formula
}

function drawDots() {
    fill(`darkred`)
    points.forEach(point =>{
        circle(point.x, point.y, size)
    })
}

function drawLines(){
    stroke(`gray`)
    strokeWeight(10)

    for (let i = 0; i < points.length - 1; i++){
        // points[i] -> first
        //points[i+1] -> next
        line(points[i].x, points[i].y, points[i+1].x,
            points[i+1].y)
    }
}

function mousePressed(){
    isDrawing = true
    points.push({x: mouseX, y: mouseY})
    console.log(points)
    // mouseX, mouseY
}

function keyPressed(){
    if(keyCode === 32) {//space bar
        clearDots()
    }
}

function clearDots(){
    points = []
}

function distance(pt1, pt2){
    let deltaX = pt2.x - pt1.x
    let deltaY = pt2.y - pt1.y
    return Math.sqrt(deltaX * deltaY + deltaY * deltaY)
}
