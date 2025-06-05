//* Récupération du titre, la description, le prix, le format et ajout d'une description complète

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

function Datadetailoeuvre(detailoeuvre) {
  const {shorttitle, titre, description, image} = detailoeuvre;
  document.querySelector(".detailoeuvre img").src = image;
  document.querySelector(".detailoeuvre h1").textContent = titre;
  document.querySelector(".detailoeuvre div p").textContent = description.substring(0,250);  //* La substring() méthode renvoie une sous-chaîne de la chaîne / crée une nouvelle chaîne de caractères / commence a 0
  document.querySelector(".detailoeuvre a").textContent = `buy ${shorttitle}`;
  document.querySelector(".detailoeuvre h2").textContent = `Description de l’oeuvre : ${titre}`;  
  document.querySelector("aside").insertAdjacentHTML("afterend",`<p>${description}</p>`);
}

//* Gérer la quantité 

const quantity = document.getElementById('quantity');
if (quantity.value < 1) {
  quantity.value = 1;
} else if (quantity.value > 100) {
  quantity.value = 100;
}