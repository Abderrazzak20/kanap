
const PageCarte = []
RecuperInformation()
PageCarte.forEach((element) =>   DisplayElement(element).then(element => console.log(element)
))



function RecuperInformation(){  
    const elemento = localStorage.getItem(localStorage.key("panier"))
    const elementParse = JSON.parse(elemento) 
    PageCarte.push(elementParse) 

}

function DisplayElement(element){
    const altTxt = element.altTxt
    const colors = element.color
    const imageUrl = element.image
    const name = element.name
    const price = element.price
    const id = element.id
    const quantity = element.quantity
    

const image = MakeImage(imageUrl,altTxt)
const article = Makearticle(id,colors)

const sistema = Setting(quantity)
const Paragraphe = Description(name,colors,price,sistema)
AppendChildArticle(article)
appendChildToArticle(article,image,Paragraphe)

}

function MakeImage(imageUrl,altTxt){
    const div = document.createElement("div")
    div.classList.add("cart__item__img")
    const image = document.createElement("img")
    image.src = imageUrl
  
    image.alt = altTxt
    div.appendChild(image)
    return div
}
function AppendChildArticle(article){
const parentArticle = document.getElementById("cart__items")
parentArticle.appendChild(article)
}

function Makearticle(id,colors){
    const article =document.createElement("article")
    article.classList.add("cart__item")
    article.dataset.id = id
    article.dataset.color = colors
    
    return article
}
function appendChildToArticle(article,image,Paragraphe){
    article.appendChild(image)
    article.appendChild(Paragraphe)
   

}

function Description(name,colors,price,sistema){
    const div = document.createElement("div")
    const divParent = document.createElement("div")
    divParent.classList.add("cart__item__content")
    div.classList.add("cart__item__content__description")
    const h2 = Title(name)
    const colore = ParagrapheColor(colors)
   const prezzo = ParagraphePrice(price)
   divParent.appendChild(div)
   divParent.appendChild(sistema)
    div.appendChild(h2)
     div.appendChild(colore)
     div.appendChild(prezzo)
    return divParent

}
function Title(name){
    const h2 = document.createElement("h2")
    h2.textContent = name
    return h2
}
function ParagrapheColor(colors){
    const colore = document.createElement("p")
    colore.textContent = colors
    return colore
}
function ParagraphePrice(price){
    const prezzo = document.createElement("p")
    prezzo.textContent = price
    return prezzo
}

function Setting(quantity){
    const div = document.createElement("div")
    div.classList.add("cart__item__content__settings")
    const quantita = SettingQuantity(quantity)
    const PDelete = SettingDelete()
    div.appendChild(quantita)
    div.appendChild(PDelete)
return div
}

function SettingQuantity(quantity){
    const divQuantity = document.createElement("div")
    divQuantity.classList.add("cart__item__content__settings__quantity")
    const Paragraphe = document.createElement('p')
    Paragraphe.textContent = ('Qté : ') 
const input = document.createElement("input")
input.type = "number"
input.classList.add("itemQuantity")
input.name = ("itemQuantity")
input.value = (quantity)
input.min = "1"
input.max = "100"
const Totale = document.getElementById("totalQuantity")
 divQuantity.appendChild(Paragraphe)
divQuantity.appendChild(input)
   
    return divQuantity
}

function SettingDelete(){
    const divDelete = document.createElement("div")
    divDelete.classList.add("cart__item__content__settings__delete")
    const p = document.createElement("p")
    p.classList.add("deleteItem")
    p.textContent= 'Supprimer'
    divDelete.appendChild(p)
    return divDelete
}

function TotalQuantity(input){
    const Totale = document.getElementById("totalQuantity")
    Totale.textContent= (input.value)
}