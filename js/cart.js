/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let myTableBody = document.querySelector('tbody');
  myTableBody.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let myTableBody = document.querySelector('tbody');

  // TODO: Iterate over the items in the cart
  for(let i = 0; i < cart.items.length; i++){
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    console.log(cart.items[i]);
    td2.textContent = cart.items[i].quantity;
    td.textContent = cart.items[i].product;
    td3.textContent = 'delete';
    td3.id = i;
    td3.className = 'removeItem';
    myTableBody.appendChild(tr);
    tr.appendChild(td3);
    tr.appendChild(td2);
    tr.appendChild(td);
  }
  // TODO: Create a TR - done

  // TODO: Create a TD for the delete link, quantity,  and the item -DONE


  // TODO: Add the TR to the TBODY and each of the TD's to the TR - DONE

}

function removeItemFromCart(event) {
  event.preventDefault();
  if(event.target.classList.contains('removeItem')){
    console.log('i am here');
    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    cart.removeItem(+event.target.id);
    // TODO: Save the cart back to local storage
    cart.saveToLocalStorage();
    // TODO: Re-draw the cart table
    renderCart();
  }


}

// This will initialize the page and draw the cart on screen
renderCart();


