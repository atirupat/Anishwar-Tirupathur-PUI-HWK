// class Roll {
//   constructor(rollType, rollGlazing, packSize, basePrice) {
//       this.type = rollType;
//       this.glazing = rollGlazing;
//       this.size = packSize;
//       this.basePrice = basePrice;

//       this.imgURL = "./products/" + rolls[this.type]['imageFile'];

//       this.currentPrice = ((this.basePrice + glazingPriceModifiers[this.glazing])*packSizePriceModifiers[this.size]).toFixed(2);
//   }
// };

//Set for the first four initial cinnamon rolls
// let initialCart = new Set();

// // Creating initial four rolls in the cart
// const initialRollOne = new Roll ('Original', 'Sugar Milk', '1', 2.49);
// const initialRollTwo = new Roll ('Walnut', 'Vanilla Milk', '12', 3.49);
// const initialRollThree = new Roll('Raisin', 'Sugar Milk', '3', 2.99);
// const initialRollFour = new Roll('Apple', 'Keep Original', '3', 3.49);

// initialCart.add(initialRollOne);
// initialCart.add(initialRollTwo);
// initialCart.add(initialRollThree);
// initialCart.add(initialRollFour);

// console.log(initialCart);

for (let item of cart) {
  createCartElements(item);
}

// Update Cart
function createCartElements(order) {
  const template = document.querySelector('#cart-order-template');
  const clone = template.content.cloneNode(true);
  order.element = clone.querySelector('.cart-item-container');

  console.log(order.element);
  const shoppingCartItems = document.querySelector('#shopping-cart-items');
  shoppingCartItems.prepend(order.element);

  updateElement(order);

  const removeButton = document.querySelector('.remove-txt')
  removeButton.addEventListener('click', () => {deleteCartElement(order)});

  updateTotalPrice();
}

function updateElement(order) {
  const cartImg = document.querySelector('.cart-img');
  const rollTypeText = document.getElementById('roll-type-txt');
  const glazingChoiceText = document.getElementById('glazing-choice-txt')
  const packSizeText = document.getElementById('pack-size-text')
  const priceText = document.querySelector('.price-txt');

  cartImg.src = order.imgURL;
  console.log(order.type);
  rollTypeText.innerText = order.type + ' Cinnamon Roll';
  glazingChoiceText.innerText = "Glazing: " + order.glazing;
  packSizeText.innerText = "Pack Size: " + order.size;
  priceText.innerText = "$" + order.currentPrice;
}

function updateTotalPrice() {
  let totalPrice = document.getElementById('total-price');
  let calculateTotalPrice = 0.00;
  for (let currentRoll of initialCart) {
    calculateTotalPrice = (Number(calculateTotalPrice) + Number(currentRoll.currentPrice)).toFixed(2);
  }
  totalPrice.innerText = '$' + calculateTotalPrice;
}

// Remove cart items
function deleteCartElement(order) {
  order.element.remove();
  initialCart.delete(order);
  console.log(initialCart.size);

  updateTotalPrice();
}