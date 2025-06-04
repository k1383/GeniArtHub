//* Récupération du titre, la description, le prix, le format et ajout d'une description complète

// async function init() {
//    const detailoeuvre = await getdetailoeuvre()  
//    Datadetailoeuvre(detailoeuvre)
// }
// init()

// async function getdetailoeuvre() {
//    try {
//       const req = await fetch('http://localhost:3000/api/products/')
//       return await req.json()
//     } catch (e) {
//       console.error("Error")
//     }
// }

// function Datadetailoeuvre(detailoeuvre) {
//    for (const detailoeuvres of detailoeuvre) {
//         const template =
//         `<article>
           
//         </article> `;
//         const section = document.querySelector('.detailoeuvre')
//         section.insertAdjacentHTML('beforeend', template)
//     }
// }

//* Gérer la quantité 

const quantity = document.getElementById('quantity');
if (quantity.value < 1) {
  quantity.value = 1;
} else if (quantity.value > 100) {
    quantity.value = 100;
}