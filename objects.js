function cartTotal(cartArray) {
    let total = 0;

    catArray.forEach(function(item) {
   total = total + item.price * item.quantity;
    });

    console.log(total);
}
carTotal([
{name:'Apple', price:4, quantity:2},
{name:'Orange',price:3, quantity:3 }
]);



