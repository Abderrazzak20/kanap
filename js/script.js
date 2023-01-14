const url = "http://localhost:3000/api/products"
fetch(url).then(risposta => risposta.json()).then(data => addProducts(data))

function addProducts(data) {
   data.forEach((elemento) => {

    const id = elemento._id
   
    const imageurl = elemento.imageUrl
    const altTxto = elemento.altTxt 
   const nome = elemento.name
    const Description = elemento.description     
   const anchor= makeanchor(id);
   const article = makearticle()
   const image = makeimage(imageurl,altTxto) 
   const h3 = makeh3(nome)
   const p = makeparagraphe(Description)
   appendChildren(anchor,article)
   appendToArticle(image,h3,p,article) 
 });  
}
function makeanchor(id){
const anchor = document.createElement("a")
anchor.href = "./product.html?id="+id
return anchor
}

function appendChildren(anchor,article){
  const items = document.getElementById("items")
    items.appendChild(anchor)  
    anchor.appendChild(article)
}
function appendToArticle(image,h3,p,article){
   article.appendChild(image)
   article.appendChild(h3)
   article.appendChild(p)
   
}
function makearticle(){
const article = document.createElement("article")
return article
}
function makeimage(imageurl, altTxto ){
const image = document.createElement("img")
   image.src= imageurl
   image.alt = altTxto
   return image
}
function makeh3(nome){
   const h3 = document.createElement("h3")
   h3.textContent = nome
   h3.classList = ("productName")
   return h3
}
function makeparagraphe(Description){
   const p = document.createElement("p")
   p.classList=("productDescription")
   p.textContent = Description
   return p

}
