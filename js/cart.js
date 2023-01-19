
const PageCarte = []
RecuperInformation()
PageCarte.forEach(element =>   DisplayElement(element))



function RecuperInformation(){  
    const elemento = localStorage.getItem(localStorage.key("panier"))
    const elementParse = JSON.parse(elemento) 
    PageCarte.push(elementParse) 

}

function DisplayElement(element){
    element.forEach(elemento => {
        
       
    const altTxt = elemento.altTxt
    const colors = elemento.color
    const imageUrl = elemento.image
    const name = elemento.name
    const price = elemento.price
    const id = elemento.id
    const quantity = elemento.quantity



const image = MakeImage(imageUrl,altTxt)
const article = Makearticle(id,colors)

const sistema = Setting(quantity,id,colors)
const Paragraphe = Description(name,colors,price,sistema)
RecuperPrix()

AppendChildArticle(article)
appendChildToArticle(article,image,Paragraphe)
});
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

function Setting(quantity,id,color){
    const div = document.createElement("div")
    div.classList.add("cart__item__content__settings")
    const quantita = SettingQuantity(quantity,id)
    const PDelete = SettingDelete(id,color,div)
    div.appendChild(quantita)
    div.appendChild(PDelete)
return div
}

function SettingQuantity(quantity,id){
    const divQuantity = document.createElement("div")
    divQuantity.classList.add("cart__item__content__settings__quantity")
    const Paragraphe = document.createElement('p')
    Paragraphe.textContent = ('Qté : ') 
    const valoreId = id
   
const input = document.createElement("input")
input.type = "number"
input.classList.add("itemQuantity")
input.name = ("itemQuantity")
input.value = quantity

input.min = "1"
input.max = "100";

input.addEventListener("input", () =>  NewV(valoreId,input.value))

 divQuantity.appendChild(Paragraphe)
divQuantity.appendChild(input)
   
    return divQuantity
}



function NewV(id,input){
  let Panier = JSON.parse(localStorage.getItem("panier"));
const findP = Panier.find((item)=> item.id === id)
findP.quantity = Number(input)
Panier.quantity = findP.quantity
localStorage.setItem("panier",JSON.stringify(Panier))

 RecuperPrix()

}

function SettingDelete(id,color,div){
    const divDelete = document.createElement("div")
    divDelete.classList.add("cart__item__content__settings__delete")
    const p = document.createElement("p")
    p.classList.add("deleteItem")
    p.textContent= 'Supprimer'
    divDelete.appendChild(p)
    const a =  document.createElement("a")
    
  
 
    divDelete.addEventListener("click",() => DivSupprime(id,color,a,div))
       a.closest("article").remove
  

    return divDelete
}


function DivSupprime(id,color,a,div){

let Panier = JSON.parse(localStorage.getItem("panier"));
    const ElementoSupprime = Panier.find((item)=> item.id === id && item.color == color)
  RecuperPrix()
 console.log (a)   
}

function RecuperPrix(){
    let totalPrice = 0;
    let Panier = localStorage.getItem("panier")
    let totalQuantity = 0;
    CalcoloPanier(Panier,totalPrice,totalQuantity)
   return (totalPrice,totalQuantity)
}

function CalcoloPanier(Panier,totalPrice,totalQuantity){
    if ( null === Panier){
        Panier = [];
    }
    else
    {  
        Panier =JSON.parse(Panier);  
        
    }
    for (let i = 0; i < Panier.length; i++) {
       let product =  fetch("http://localhost:3000/api/products/"+Panier[i].id).then(response => {
        return response.json();
      
       })
       totalPrice +=  Panier[i].price * Panier[i].quantity
       totalQuantity += Panier[i].quantity
    }
    document.getElementById("totalPrice").innerHTML = totalPrice
    document.getElementById("totalQuantity").innerHTML = totalQuantity   
}


