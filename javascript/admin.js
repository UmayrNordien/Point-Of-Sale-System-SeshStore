let products = JSON.parse(localStorage.getItem('collection')) ?    //    TERNARY OPERATOR (inline)
  JSON.parse(localStorage.getItem('collection')) : [

    {
      id: 1,
      productName: "Faded Purple CrewNeck",
      quantity: 2,
      size: "L",
      price: 600,
      image: "https://i.postimg.cc/P56qnJ4S/Crew-Neck-1.jpg"
  },
  {
      id: 2,
      productName: "Graphic Sweatshirt",
      quantity: 1,
      size: "L, XL",
      price: 699,
      image: "https://i.postimg.cc/L8tD8d7Y/Graphic-Sweat-Shirt-1.jpg"
  },
  {
      id: 3,
      productName: "Carhartt Bones-Jacket",
      quantity: 3,
      size: "M",
      price: 2200,
      image: "https://i.postimg.cc/1XzWTW5C/Carhartt-Bones-1.jpg"
  },
  {
      id: 4,
      productName: "Nike Purple FlameHoodie",
      quantity: 1,
      size: "M",
      price: 1800,
      image: "https://i.postimg.cc/tgNGGMpp/Nike-Purple-Flames.jpg"
  },
  {
      id: 5,
      productName: "Graphic SW Pants",
      quantity: 2,
      size: "L, XL",
      price: 1750,
      image: "https://i.postimg.cc/cCfd6Mnc/275834450-542228100497493-5314424466359396574-n.jpg"
  },
  {
      id: 6,
      productName: "Ski Mask",
      quantity: 6,
      size: "M",
      price: 666,
      image: "https://i.postimg.cc/DfDT3Nt3/Ski-Mask-1.jpg"
  },
  ];

//PRODUCT INFO DISPLAYED IN A TABLE FORMAT ON checkout.html 
function productInfo() {
  let tbody = document.querySelector("#tbody");
  tbody.innerHTML = "",   //targets values within quotations in the array
    Object.keys(products).forEach((collection) => {
      //loops until all properties have been displayed in the array 
      tbody.innerHTML += 
      //added a div class for the table to decrease font siz e in attempt to make the table more responsive
  `                                                                            
  <div class="table-respn">                                                                                                                
  <td>${products[collection].productName}</td>
  <td>${products[collection].size}</td>
  <td>${products[collection].price}</td>
  <td><button id="edit" onclick="edit()" class="btn btn-success">⌨</button></td>
  <td><button class="btn btn-dark" id="remove" onclick="remove(${products[collection].index})">⌫</button></td>
  </div>
`
    },
    )
};

productInfo();      //calls the function and pushes it within the index.html tbody tag



//DELETE FUNCTION 
/* The delete button only works when the page is refreshed, 
then changes will be re-elected in the checkout.html table and product array on the index.html page */
function remove(index) {
  localStorage.setItem('collection', JSON.stringify(products));
  document.querySelector('#remove');
  products.splice(products[index], 1)

  localStorage.setItem('collection', JSON.stringify(products));
  productData();
}

localStorage.setItem('collection', JSON.stringify(products));



//ADDING NEW PRODUCTS (doesn't display in the checkout table but adds to the array)
let create = document.querySelector('#createNew');
create.addEventListener('click', (e) => {
  e.preventDefault(); //to prevent the browser from executing the default action of the selected element
                                      
  let productName = document.querySelector('#product').value;
  let size = document.querySelector('#size').value;
  let price = document.querySelector('#price').value;
  let image = document.querySelector('#image').value;

  products.push(                                          //adds new items to the end of the array, changes length of array 
    {
      productName,
      size,
      price,
      image
    }
  )
  /* ADDED A ALERT IF THE EVENT HAPPENS */
  alert('Product added to the collection')
  localStorage.setItem('collection', JSON.stringify(products));//takes a JavaScript object and transforms it into a JSON string
  productData();                                            //newly created products added to local storage
})



