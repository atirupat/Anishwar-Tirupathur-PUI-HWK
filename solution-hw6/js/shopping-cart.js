class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing = rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;

      this.imgURL = './products/' + rolls[this.type]["imageFile"];

      this.currentPrice = ((this.basePrice + glazingPriceModifiers[this.glazing])*packSizePriceModifiers[this.size]).toFixed(2);
  }
};

let initialCart = new Set();

// Retrieve from Local Storage
if (localStorage.getItem('rollsInCart') != null) {
  retrieveFromLocalStorage();
}

function retrieveFromLocalStorage() {
  const rollsOrderArrayString = localStorage.getItem('rollsInCart');
  const rollsOrderArray = JSON.parse(rollsOrderArrayString);
  console.log(rollsOrderArray);

  for (let item of rollsOrderArray) {
    console.log('entering for loop');
    const displayOrder = addRoll(item.type, item.glazing, item.size, item.basePrice);
    createCartElements(displayOrder);
  }
}

// Create new rolls
function addRoll(rollType, rollGlazing, packSize, basePrice) {
  const rollToAdd = new Roll(rollType, rollGlazing, packSize, basePrice);
  initialCart.add(rollToAdd);
  return rollToAdd;
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

  updateTotalPrice();
  saveToLocalStorage();
}

function saveToLocalStorage() {
  const rollsOrderArray = Array.from(initialCart);

  const rollsOrderArrayString = JSON.stringify(rollsOrderArray);

  localStorage.setItem('rollsInCart', rollsOrderArrayString);

  console.log(localStorage);
}