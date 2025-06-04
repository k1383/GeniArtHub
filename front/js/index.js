async function init() {
   const products = await getproduct()  
   Dataproductlist(products)
}
init()

async function getproduct() {
   try {
      const req = await fetch('http://localhost:3000/api/products/')
      return await req.json()
    } catch (e) {
      console.error("Error")
    }
}

function Dataproductlist(products) {
   for (const product of products) {
        const template =
        `<article>
            <img src="${product.image}" alt="Titre produit">
            <a href="products.html?id=${product.shorttitle}">Buy ${product.shorttitle}</a>
        </article> `;
        const section = document.querySelector('.products')
        section.insertAdjacentHTML('beforeend', template)
        // console.log(product)
    }
}
  


