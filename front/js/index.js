//* je recup mes produit de l'api avec getproduct et je les affiche avec dataproductlist

async function init() {
  const products = await getproduct()  
  Dataproductlist(products)
}
init() 

//* Fonction async qui envoie une requête à l’api pour récupérer les données, le try catch affiche "error" dans la console si la requête échoue.

async function getproduct() {
  try {
    const req = await fetch('http://localhost:3000/api/products/')  //* lien donner dans la consigne 
    return await req.json()
  } catch (e) {
    console.error("Error")
  }
}
 
//* Fonction qui recup les données de l'api et les affiche dans le html

function Dataproductlist(products) {
  for (const product of products) {
    const template =
    `<article>
      <img src="${product.image}" alt="Titre produit">
      <a href="product.html?id=${product._id}">${product.shorttitle}</a>
    </article> `;
    const section = document.querySelector(".products");
    section.insertAdjacentHTML("beforeend", template);  //* Dans l'élément sélectionné, à la fin de l'élément 
  }
}