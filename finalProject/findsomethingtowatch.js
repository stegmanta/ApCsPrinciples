console.log("running code")

let timesButtonClick = 0
let videoGeneratorButton = document.getElementById("videoGeneratorRandom")
let reccomender = document.getElementById("reccomendation")
let funny = document.getElementById("funnyCategory")
let interestingOrInformative = document.getElementById("interestingOrInformativeCategory")

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor
    (max));
}

function checkFunny(){
    if(funny.checked){
        return true
    }else{
        return false
    }
}


let url = ""
let category = ""


let videoLinkList = [
    {
        
        url: `https://www.youtube.com/watch?v=WojvlJ_xibE`,
        category: "Funny"

    },
    {
        url: `https://www.youtube.com/watch?v=7wHdU4FrMaQ`,
        category: "Funny"

    },
    {
        url: `https://www.youtube.com/watch?v=F5WWyyYG018`,
        category: "Music",   
    },
    {
        url: `https://www.youtube.com/watch?v=sHCHEykUxP4`,
        category: "Interesting/Informmative",
    },
    {
        url: `https://www.youtube.com/watch?v=9tbxDgcv74c`,
        category: "Interesting/Informmative",
    },
    {
        url: `https://www.youtube.com/watch?v=L7_jYl8A73g`,
        category: "Music",
    },
    {
        url: `https://www.youtube.com/watch?v=IIPcGLSPTQI`,
        category: "Funny"
    },
    {
        url: `https://youtu.be/954nTD-heG4`,
        category: "Funny"
    }


]

videoGeneratorButton.addEventListener("click", generateVideo)


// function getVidLink(){
//     return videoLinkList.find(element =>)
// }

let funnyVideoLinks = []



function generateVideo(){
    console.log(checkFunny())
    let i = 0
    let funnyCount = 0;
    for(i = 0; i < videoLinkList.length; i++){
        let categoryInOrder = videoLinkList[i].category
        let linksInOrder = videoLinkList[i].url
        // console.log(categoryInOrder)
        if(categoryInOrder === "Funny" && checkFunny()){
            funnyVideoLinks.push(linksInOrder)
            funnyCount++
            console.log(`there are ${funnyCount} funny videos`)
            console.log(funnyVideoLinks)
            reccomender.href=linksInOrder;
            reccomender.innerHTML = `Click HERE FOR YOUR VIDEO...in category
            ${categoryInOrder}`
        }if(categoryInOrder === "Random" && checkRandom){

        }
        
    }
    // console.log(`the link is ${[getRandomInt(videoLinkList.length)].url} 
    // and the category is ${[getRandomInt(videoLinkList.length)].category}`) figure out how to 
    // store the link and category
    //  variable each time the button is clicked
    // console.log(videoLinkList.length)
    // let link = getVidLink()
    let decidedLink = getRandomInt(videoLinkList.length)
    let randUrl = videoLinkList[decidedLink].url
    let randCategory = videoLinkList[decidedLink].category
    console.log("here is vid")
    console.log(reccomender)
    // reccomender.href = link
    // use format like above to create a list of hrefs then choose randomly from the list
    // console.log(category)
    // system.log(reccomender.href=videoLinkList[getRandomInt(videoLinkList.length)].url)
    
    reccomender.href=randUrl;
    reccomender.innerHTML = `Click HERE FOR YOUR VIDEO...in category
    ${randCategory}`
    // console.log(category)
    
}

function generateDifferentVid(){

}

// function setup(){
//     createCanvas(400,400)
//     wordObject = createWord3D(
//         "Dog",       // The actual character that you want to draw (anything that can be passed into "text()")
//         4,        // How thick the 3D rendered letter is (i.e. how many cube pixels of size "size" it is on z-axis)  
//         4,         // The size of a unit "box()" making up part of the letter  
//         400,   // The size of the canvas it renders the letter on (higher is more detailed, 20-30 is a good range)  
//         true,     // [OPTIONAL, default = true] Gives the bevelled, embossed 3D look (as seen in screenshot)  
//         font,         // [OPTIONAL, default = "Georgia"] Gives the font uses, can be any default ones or anything added  
//         style         // [OPTIONAL, default = BOLD] Gives the chosen style out of BOLD, NORMAL, ITALIC  
//       )

// }

// function draw(){
// wordObject.show()
// p5.prototype.Word3D = function(p, string, depth, size , resolution, bevelled, font, style) {
// 	// Adds spaces for kerning
// 	this.string = string.split("").join(String.fromCharCode(8202));
// 	this.stringLength = string.length;
// 	this.font = font;
// 	this.style = style;
// 	this.threshold = 160; // Magic number, works well for text

// 	this.create = function() {
// 		// Create the 2D graphic
// 		var graphic = p.createGraphics(this.resX*this.stringLength, this.resY);
// 		// Draw the given string in the centre
// 		graphic.textAlign("center", "center");
// 		graphic.textSize(this.resX);
// 		graphic.textFont(font);
// 		graphic.textStyle(style);
// 		graphic.background(255);
// 		graphic.text(this.string, graphic.width / 2, graphic.height / 2);

// 		return graphic;
// 	}

// 	p5.prototype.Object3D.call(this, p, depth, size, resolution, bevelled, this.threshold);
// 	this.array = this.toArray(this.create());
// 	this.rects = p5.prototype.getRects(this.array, this.bevelled);

// 	this.modX = function() {
// 		return (this.resX*this.stringLength / 2)
// 	}
// };

// p5.prototype.createWord3D = function(string, depth = 6, size = 10, resolution = 50, bevelled = true, font = "Times New Roman", style = "bold") {
//     return new p5.prototype.Word3D(p = this, string, depth, size, resolution, bevelled, font, style);
// };
// }
