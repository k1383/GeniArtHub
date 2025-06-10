//* Récupérer les éléments ajoutés par l'utilisateur dans son panier

const panier = JSON.parse(localStorage.getItem("panier")) || [];

function afficherProduit(produit) {
  const {image, titre, format, prix, quantité} = produit;

    const Elementpanier = 
    ` <article>
      <img src="${image}" alt="Titre produit">
      <h2>${titre}</h2>
      <p> Format : ${format}</p>
      <p>${prix}</p>
      <input type="number" placeholder="1" value=${quantité} min="0" max="100">
      <a href="">Supprimer</a>
    </article>`;
  
    const section = document.querySelector(".Elementpanier");
    section.insertAdjacentHTML("beforeend", Elementpanier);
}
panier.forEach(afficherProduit);  //* permet d'ajouter les éléments choisie par l'utilisateur de product dans cart

//* Form 

const myForm = document.getElementById('myForm')

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const specialCharacters = /[0-9+=@*/%£¤&~{}<>:;?,!§]/;  //* Caractère spéciaux
    const numbers = /[0-9]/;  //* Seulement les chiffres 

    //* Prénom 

    const firstnameInput = document.getElementById('firstname')
    if (specialCharacters.test(firstnameInput.value)) {  //* Test si il y a des caractères spéciaux
        alert("Le prénom ne doit pas contenir de caractères spéciaux.");
        return;
    } else if (firstnameInput.value.length < 2) {  //* Vérifie si le Prénom a minimum 2 lettres
        alert("Le prénom doit contenir plus de 2 caractères");
        return;
    } 

    //* Nom

    const nameInput = document.getElementById('name')
    if (specialCharacters.test(nameInput.value)) {  //* Test si il y a des caractères spéciaux
        alert("Le nom ne doit pas contenir de caractères spéciaux.");
        return;
    } else if (nameInput.value.length < 2) {  //* On vérifie si le Nom a minimum 2 lettres
        alert("Le nom doit contenir plus de 2 caractères");
        return;
    } 

    //* Adresse

    const AdresseInput = document.getElementById('Adresse')
    if(AdresseInput.value.length < 10 ) {  //* On vérifie si adresse a au moins 10 caractères
        alert("L'adresse doit contenir au moins 10 caractères");  
        return;
    } 

    //* Ville 

    const VilleInput = document.getElementById('Ville')
    if (VilleInput.value.length < 3) {
        alert("Ville doit contenir plus de 3 caractères");
        return;  
    } else if (numbers.test(VilleInput.value)) {
        alert("Ville ne doit pas contenir de chiffres");
        return;
    }

    //* Email, vérifie si l’email saisi par l’utilisateur est correct, sinon on affiche "Error mail"

    const EmailInput = document.getElementById('email')
    function valideEmail(Email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(Email);
    }
    const email = EmailInput.value;
    if(valideEmail(email)){
        console.log("validé");
    } else {
        alert("Error mail");
    }

})

//* Return → Empêchent la suite du code de s’exécuter après une erreur, Empêchent d’afficher plusieurs alertes en même temps
//* .test() Permet de tester si un motif est présent