const url = "http://localhost:3000/api/products"
fetch(url).then(risposta => risposta.json()).then(data => addproduct(data))

function addproduct(data) {
    console.log(data)
    const id = data[0]._id
    const imageurl = data[0].imageUrl
    const altTxto = data[0].altTxt 
   const anchor= makeanchor(id);
   const article = makearticle()
   const image = makeimage(imageurl,altTxto) 
    const nome = data[0].name
   const h3 = makeh3(nome)
   const Description = data[0].description
   const p = makeparagraphe(Description)
   appendChildren(anchor,article,image,h3,p)
  
   
}
function makeanchor(id){
const anchor = document.createElement("a")
anchor.href = "./product.html?id="
anchor.a = "bello figo"
return anchor
}

function appendChildren(anchor,article,image,h3,p){
  const items = document.getElementById("items")
    items.appendChild(anchor)  
    anchor.appendChild(article) 
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