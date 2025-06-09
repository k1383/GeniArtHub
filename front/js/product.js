//* récupérer directement l'id a l'url

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

async function init() {
  const detailoeuvre = await getdetailoeuvre()  
  Datadetailoeuvre(detailoeuvre)
}
init()

async function getdetailoeuvre() {
  try {
    const req = await fetch(`http://localhost:3000/api/products/${id}`);
    return await req.json();
  } catch (error) {
    console.error("error");
  }
}

//* Récupération du titre, la description, le prix, le format et ajout d'une description complète

function Datadetailoeuvre(detailoeuvre) {
  const {image, titre, description,shorttitle, declinaisons} = detailoeuvre;
  document.querySelector(".detailoeuvre img").src = image;
  document.querySelector(".detailoeuvre h1").textContent = titre;
  document.querySelector(".detailoeuvre div p").textContent = description.substring(0,250);  
  //* substring() méthode qui renvoie une sous-chaîne de la chaîne / crée une nouvelle chaîne de caractères / substring(debut, fin)
  document.querySelector(".detailoeuvre a").textContent = `buy ${shorttitle}`;
  document.querySelector(".detailoeuvre h2").textContent = `Description de l’oeuvre : ${titre}`;  
  document.querySelector("aside").insertAdjacentHTML("afterend",`<p>${description}</p>`);
  document.querySelector(".showprice").textContent = `${declinaisons[0].prix}€`;

  //* Afficher les format dans une liste déroulante

  const select = document.querySelector("select");
  declinaisons.forEach((format) => {
    const {taille} = format;
    const option = 
    `<option 
      value="${taille}">Format : ${taille}
    </option>`;
    select.insertAdjacentHTML("beforeend", option);
  });

  //* Gérer les formats et les prix

  select.addEventListener('change',(e) => {   //* "change" se déclenche quand l'utilisateur modifie la valeur de l'élément et sort du champ
    e.preventDefault();
    const taille = e.target.value;
    const prix = declinaisons.find(element => element.taille == taille)
    if (prix)                                       
    document.querySelector(".showprice").textContent = `${prix.prix}€`;
  })

}

//* Gérer la quantité 

const quantity = document.getElementById('quantity');
quantity.addEventListener('change', () => {
  if (quantity.value < 1) {
    alert("Commander au moins une oeuvre");
  } else if (quantity.value > 100) {
    alert("Vous ne pouvez pas commander plus de 100 oeuvres");
  }
});

//* Récupération des éléments sélectionnés par l'utilisateur afin de les ajouter au panier

const buyButton = document.querySelector(".button-buy");
buyButton.addEventListener("click", (e) => {
  e.preventDefault();
  
  const image = document.querySelector(".detailoeuvre img").src;
  const titre = document.querySelector(".detailoeuvre h1").textContent;
  const format = document.querySelector("#format").value;
  const prix = document.querySelector(".showprice").textContent;
  const quantité = document.getElementById('quantity').value;

  const produit = {image, titre, format, prix, quantité};

  const panier = JSON.parse(localStorage.getItem("panier")) || [];
  panier.push(produit);
  localStorage.setItem("panier", JSON.stringify(panier));

  //* Récuperation des produit , on pousse les produits dans le tableau vide 

  alert("Votre produit a bien été ajouter au panier");
})
