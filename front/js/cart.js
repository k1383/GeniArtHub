/* Form */ 

const myForm = document.getElementById('myForm')

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstnameInput = document.getElementById('firstname')  //* Prénom
    const nameInput = document.getElementById('name')  //* Nom
    const AdresseInput = document.getElementById('Adresse')  //* Adresse
    const VilleInput = document.getElementById('Ville')  //* Ville
    const EmailInput = document.getElementById('email')  //* Email
    const specialCharacters = /[0-9+=@*/%£¤&~{}<>:;?,!§]/;  //* Caractère spéciaux
    const numbers = /[0-9]/;  //* Seulement les chiffres 

    //* .test() Permet de tester si un motif est présent

    //* Prénom 

    if (specialCharacters.test(firstnameInput.value)) {  //* Test si il y a des caractères spéciaux
        alert("Le prénom ne doit pas contenir de caractères spéciaux.");
        return;
    } else if (firstnameInput.value.length < 2) {  //* Vérifie si le Prénom a minimum 2 lettres
        alert("Le prénom doit contenir plus de 2 caractères");
        return;
    } 

    //* Nom

    if (specialCharacters.test(nameInput.value)) {  //* Test si il y a des caractères spéciaux
        alert("Le nom ne doit pas contenir de caractères spéciaux.");
        return;
    } else if (nameInput.value.length < 2) {  //* On vérifie si le Nom a minimum 2 lettres
        alert("Le nom doit contenir plus de 2 caractères");
        return;
    } 

    //* Adresse

    if(AdresseInput.value.length < 10 ) {  //* On vérifie si adresse a au moins 10 caractères
        alert("Doit contenir au moins 10 caractères");
        return;
    } 

    //* Ville 

    if (VilleInput.value.length < 3) {
        alert("Doit contenir plus de 3 caractères");
        return;  
    } else if (numbers.test(VilleInput.value)) {
        alert("Ne doit pas contenir de chiffres");
        return;
    }

    //* Email 

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

//* Empêchent la suite du code de s’exécuter après une erreur
//* Empêchent d’afficher plusieurs alertes en même temps