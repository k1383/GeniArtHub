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
        alert("Le nom ne doit pas contenir de caractères spéciaux.");
    } if (firstnameInput.value.length < 2){  //* Vérifie si le Prénom a minimum 2 lettres
        alert("Le nom doit contenir plus de 2 caractères");
    } else {
        console.log("validé");
    }

    //* Nom

    if (specialCharacters.test(nameInput.value)) {  //* Test si il y a des caractères spéciaux
        alert("Le nom ne doit pas contenir de caractères spéciaux.");
    } if (nameInput.value.length < 2){  //* On vérifie si le Nom a minimum 2 lettres
        alert("Le nom doit contenir plus de 2 caractères");
    } else {
        console.log("validé");
    }

    //* Adresse

    if(AdresseInput.length = 10 ){  //* On vérifie si adresse a au moins 10 caractères
        alert("error");
    } else {
        console.log("validé");
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