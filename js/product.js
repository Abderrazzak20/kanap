const string = window.location.search
const paramID = new URLSearchParams(string)
const productID = paramID.get("id")


const urlComplet = ("http://localhost:3000/api/products/"+productID)
fetch(urlComplet).then(risposta => risposta.json()).then((data) => headData(data))

function headData(element){
    const altTxt = element.altTxt
    const description = element.description
    const colors = element.colors
    const imageUrl = element.imageUrl
    const name = element.name
    const price = element.price
    const id = element._id
   const image = makeimage(imageUrl,altTxt)
    const title = maketitle(name)
    const h3 = makePrice(price)
    const p = makeparagraphe(description)
   makeColori(colors)

    
    appendChildren(image,title,h3,p)
}

function makeimage(imageUrl,altTxt){
    const image = document.createElement("img")
    image.src = imageUrl
    image.alt = altTxt
return image
  
}

function appendChildren(image,title,h3,p){
    const parentImage = document.querySelector(".item__img")
    const parentTitle = document.getElementById("title")
    const parentPrice = document.getElementById("price")
    const parentPararaphe = document.getElementById("description")
   const Select = document.getElementById("colors")
    parentImage.appendChild(image)
    parentTitle.appendChild(title)
    parentPrice.appendChild(h3)
    parentPararaphe.appendChild(p)
   
  

    return parent
}
function maketitle(name){
const title = document.createElement("h1")
title.textContent = name
return title
}

function makePrice(price){
    h3 = document.createElement("H7")
    h3.textContent= price
    return h3
}

function makeparagraphe(description){
    const p = document.createElement("p")
    p.textContent = description
    return p
}
function makeColori(colors){
colorLoop(colors)
}
function colorLoop(colors){
    const Select = document.getElementById("colors") 
    colors.forEach((color) => {
     const option = document.createElement("option")  
    option.value = color
    option.textContent = color
        Select.appendChild(option)    
})
}
