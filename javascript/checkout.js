/* 
The getItem() method of the Storage interface, when given a key name, 
returns that keys value if the key does not exist, in the Storage object. 
*/
let checkoutPage = JSON.parse(localStorage.getItem('collection')); 
console.log(checkoutPage);
/* 
The querySelector() method returns the first child element that matches a specified CSS selector(s) of an element 
*/


let tbody = document.querySelector('tbody');

//TEMPLATE USING TABLE ROWS FOR CHECKOUT
/* Object.keys() returns an array whose elements are strings 
to the numbered string property names */
Object.keys(checkoutPage).forEach((collection) => {   
  if (checkoutPage[collection]) {
    tbody.innerHTML +=
      `
    <tr>
    <td>${checkoutPage[collection].productName}</td>
    <td>${checkoutPage[collection].size}</td>
    <td>${checkoutPage[collection].quantity}</td>
    <td>${checkoutPage[collection].price}</td>
    </tr>
    `
  }
});









