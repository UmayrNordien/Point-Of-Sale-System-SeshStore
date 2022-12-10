let products = JSON.parse(localStorage.getItem('collection'));

//CARDS DISPLAYED ON index.html
function displayProducts() {
  products.forEach((collection) => {
    document.querySelector('.row').innerHTML +=
      `<div class="card" style="width: 288px;">
        <img src="${collection.image}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title text-black">${collection.productName}</h5>
          <p class="card-text text-black">Sizes available : ${collection.size}</p>
          <p class="card-text text-black">R${collection.price}</p>
          <a id='addCheckout'class="btn btn-dark">🛒</a>
        </div>
      </div>`
  })
}
displayProducts();  //calls the function



