console.log("running code")

let timesButtonClick = 0
let videoGeneratorButton = document.getElementById("videoGeneratorRandom")
let reccomender = document.getElementById("reccomendation")
let funny = document.getElementById("funnyCategory")
let interestingOrInformative = document.getElementById("interestingOrInformativeCategory")
let random = document.getElementById("randomCategory")
let music = document.getElementById("musicCategory")

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor
    (max));
}

// console.log(funny)

function check(category){
    if(category.checked){
        return true
    }else{
        return false
    }
}

function setup(){
    createCanvas(500,500)
}

function draw(){
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

let categoriesInOrder = []
let linksInOrder = []
let decidedLink
let i = 0
let links = getLinks()
let link
let count = 0;
let categoryInOrder
let sortedList = []


function getLinks(){
    for(i = 0; i < videoLinkList.length; i++){
        linksInOrder.push(videoLinkList[i].url)
    }
    return linksInOrder
}

function sortLinks(a){
    for(i = 0; i < videoLinkList.length; i++){
        if(videoLinkList[i].category === a){
            // console.log(videoLinkList[i].category)
            sortedList.push(videoLinkList[i].url)
            console.log(sortedList)
            // console.log(links)
        }
    }
    return sortedList[getRandomInt(sortedList.length)]
}


function getCategories(){
    for(i = 0; i < videoLinkList.length; i++){
        categoriesInOrder.push(videoLinkList[i].category)
    }
    return categoriesInOrder    
}


function generateVideo(){

    let categories = getCategories()
    let randomSelection = getRandomInt(links.length)
    if(check(random)){
        reccomender.href = links[randomSelection]
        console.log(reccomender)
        reccomender.innerHTML = `Click HERE FOR YOUR VIDEO...in category
        ${categories[randomSelection]}`
        // categoriesInOrder = []
        // linksInOrder = []

    }
    if(check(funny)){
        link = sortLinks("Funny")
        reccomender.href = link
        console.log(reccomender)
        reccomender.innerHTML = `Click HERE FOR YOUR VIDEO...in category
        Funny`
        sortedList = []
    }
    if(check(interestingOrInformative)){
        let interestingLink = sortLinks("Interesting/Informmative")
        reccomender.href = interestingLink
        // console.log(interestingLink)
        console.log(reccomender)
        reccomender.innerHTML = `Click HERE FOR YOUR VIDEO...in category
        Interesting/Informative`
        sortedList = []
    }
    if(check(music)){
        let interestingLink = sortLinks("Music")
        reccomender.href = interestingLink
        // console.log(interestingLink)
        console.log(reccomender)
        reccomender.innerHTML = `Click HERE FOR YOUR VIDEO...in category
        Music`
        sortedList = []
    }
    

    // console.log(check(funny))
    // console.log(`the link is ${[getRandomInt(videoLinkList.length)].url} 
    // and the category is ${[getRandomInt(videoLinkList.length)].category}`) figure out how to 
    // store the link and category
    //  variable each time the button is clicked
    // console.log(videoLinkList.length)
    // let link = getVidLink()
    // reccomender.href = link
    // use format like above to create a list of hrefs then choose randomly from the list
    // console.log(category)
    // system.log(reccomender.href=videoLinkList[getRandomInt(videoLinkList.length)].url)
    // console.log(category)
    
}

