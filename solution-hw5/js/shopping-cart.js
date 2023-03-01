// Note for Homework: will be using class Roll and array cart which was already defined in product-detail.js

// class Roll {
//   constructor(rollType, rollGlazing, packSize, basePrice) {
//       this.type = rollType;
//       this.glazing =  rollGlazing;
//       this.size = packSize;
//       this.basePrice = basePrice;
//   }
// };

let initialCart = [];

// Creating initial four rolls in the cart
const initialRollOne = new Roll ('Original', 'Sugar Milk', '1', 2.49);
const initialRollTwo = new Roll ('Walnut', 'Vanilla Milk', '12', 3.49);
const initialRollThree = new Roll('Raisin', 'Sugar Milk', '3', 2.99);
const initialRollFour = new Roll('Apple', 'Original', '3', 3.49);

initialCart.push(initialRollOne);
initialCart.push(initialRollTwo);
initialCart.push(initialRollThree);
initialCart.push(initialRollFour);

console.log(initialCart);

for (let item of initialCart) {
  createCartElements(item);
}

// Update Cart
function createCartElements(order) {
let url = order.type // access rolls to get url

  const template = document.querySelector('#cart-order-template');
  const clone = template.content.cloneNode(true);
  order.element = clone.querySelector('.cart-item-container');
  
  console.log(order.element);

  // const notecardListElement = document.querySelector('#notecard-list');
}



