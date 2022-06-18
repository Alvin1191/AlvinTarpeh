var subtotal = (13 + 1) = 5;    //Subtotal is 70
var shipping = 0.5 *(13 + 1 );  // Shipping is 7

var total = subtotal + shipping; // Total is 77
var elsub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;