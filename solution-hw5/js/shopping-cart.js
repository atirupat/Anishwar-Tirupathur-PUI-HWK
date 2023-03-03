class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing = rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;

      this.imgURL = "./products/" + rolls[this.type]['imageFile'];

      this.currentPrice = ((this.basePrice + glazingPriceModifiers[this.glazing])*packSizePriceModifiers[this.size]).toFixed(2);
  }
};

// Array for the first four initial cinnamon rolls
let initialCart = [];

// Creating initial four rolls in the cart
const initialRollOne = new Roll ('Original', 'Sugar Milk', '1', 2.49);
const initialRollTwo = new Roll ('Walnut', 'Vanilla Milk', '12', 3.49);
const initialRollThree = new Roll('Raisin', 'Sugar Milk', '3', 2.99);
const initialRollFour = new Roll('Apple', 'Keep Original', '3', 3.49);

initialCart.push(initialRollOne);
initialCart.push(initialRollTwo);
initialCart.push(initialRollThree);
initialCart.push(initialRollFour);

console.log(initialCart);

for (let item of initialCart) {
  console.log(initialCart.indexOf(item));
  createCartElements(item);
}

// Update Cart
function createCartElements(order) {
  // let url = order.type  access rolls to get url
  const template = document.querySelector('#cart-order-template');
  const clone = template.content.cloneNode(true);
  order.element = clone.querySelector('.cart-item-container');

  console.log(order.element);
  const shoppingCartItems = document.querySelector('#shopping-cart-items');
  shoppingCartItems.prepend(order.element);

  updateElement(order);
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



