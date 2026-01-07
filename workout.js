// Create a simple 'Production Calculator'

let productPrice = 1000;
let quantity = 10;
let discountPercentage = 20;

let totalPrice = productPrice + quantity;

discountPercentage /= 100;

let finalPrice = totalPrice - discountPercentage; 

console.log(totalPrice);