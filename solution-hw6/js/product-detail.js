// Create Global Variables
let basePrice = 2.49;

let currentGlazingPriceAdapt;
let currentPackPriceMult;

let cart = new Set();

// For both currentGlazing and currentPackSize set intial value to the default options
let currentGlazing = 'Keep Original';
let currentPackSize = '1';

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing = rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;

      this.imgURL = "./products/" + rolls[this.type]["imageFile"];

      this.currentPrice = ((this.basePrice + glazingPriceModifiers[this.glazing])*packSizePriceModifiers[this.size]).toFixed(2);
  }
};

// Retrieve from local storage
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
  }
}


// Create new rolls
function addRoll(rollType, rollGlazing, packSize, basePrice) {
  const rollToAdd = new Roll(rollType, rollGlazing, packSize, basePrice);
  cart.add(rollToAdd);
  // return rollToAdd;
}

// Update Product-Detail Page based on URL
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

//Update Page Title
document.getElementById("detail-section-title").innerHTML = rollType + ' cinnamon roll';

// Update Base Price
basePrice = rolls[rollType].rollBasePrice;

// Update Product Image
const productImageElement = document.querySelector('.detail-img');
productImageElement.src = "./products/" + rolls[rollType].imageFile;

// ------------------------------------------------------------------------------

// Creating a class for the Glazing Dropdown Menu Options

class Glazing{
  optionName;
  priceAdaptation;

  constructor (optionName, priceAdaptation) {
    this.optionName = optionName;
    this.priceAdaptation = priceAdaptation;
  }
};

// Create Glazing Dropdown Menu Option Objects from Class
const keepOriginal = new Glazing('Keep Original', 0.00);

const sugarMilk = new Glazing('Sugar Milk', 0.00);

const vanillaMilk = new Glazing('Vanilla Milk', 0.50);

const doubleChocolate = new Glazing('Double Chocolate', 1.50);

// Create an array with the new glazing options
let glazingOptions = [];

glazingOptions.push(keepOriginal);
glazingOptions.push(sugarMilk);
glazingOptions.push(vanillaMilk);
glazingOptions.push(doubleChocolate);

currentGlazingPriceAdapt = glazingOptions[0].priceAdaptation;

// ------------------------------------------------------------------------------

// The following code is adapted from the example provided with Lab 04
// Add Glazing Elements to Glazing Selection Dropdown Menu

let selectGlazingElement = document.querySelector('#glazing');

for (let i=0; i < glazingOptions.length; i++) {
  let option = document.createElement('option');
  let glazingLoad = glazingOptions[i];
  option.text = glazingLoad.optionName;
  option.value = glazingLoad.priceAdaptation; 
  selectGlazingElement.add(option);
}
// Give it a listener for the 'change' event, which is a function that will run
// when the selected option changes. You could also do this by setting the
// onchange property of selectElement, e.g. selectElement.onchange = ...

function chooseGlazingType(element) {
  // In this function, `this` corresponds to the select
  // element. So `this.value` will contain the value of the
  // selected option  a string.
  // We need to convert the string value to an integer
  currentGlazingPriceAdapt = parseFloat(element.value);

  calculateNewPrice();

  let text= element.options[element.selectedIndex].text;

  currentGlazing = text;
}

// ------------------------------------------------------------------------------
// Creating a class for the Pack Size Dropdown Menu Options

class Pack{
  orderSize;
  priceMultiplier;

  constructor (orderSize, priceMultiplier) {
    this.orderSize = orderSize;
    this.priceMultiplier = priceMultiplier;
  }
};

// Create Glazing Dropdown Menu Option Objects from Class
const packOne = new Pack('1',1);

const packThree = new Pack('3',3);

const packSix = new Pack('6',5);

const packDozen = new Pack('12',10);

// Create an array with the new Pack options
let packOptions = [];

packOptions.push(packOne);
packOptions.push(packThree);
packOptions.push(packSix);
packOptions.push(packDozen);

currentPackPriceMult = packOptions[0].priceMultiplier;

// ------------------------------------------------------------------------------

// The following code is adapted from the example provided with Lab 04
// Add Pack Size Elements to Pack Selection Dropdown Menu

let selectPackElement = document.querySelector('#pack-size');

for (let i=0; i < packOptions.length; i++) {
  let option = document.createElement('option');
  let packSize = packOptions[i];
  option.text = packSize.orderSize;
  option.value = packSize.priceMultiplier; 
  selectPackElement.add(option);
}
// Give it a listener for the 'change' event, which is a function that will run
// when the selected option changes. You could also do this by setting the
// onchange property of selectElement, e.g. selectElement.onchange = ...

function choosePackSize(element) {
  // In this function, `this` corresponds to the select
  // element. So `this.value` will contain the value of the
  // selected option as a string.

  // We need to convert the string value to an integer
  currentPackPriceMult = parseFloat(element.value);

  calculateNewPrice();

  // Source: https://stackoverflow.com/questions/14976495/get-selected-option-text-with-javascript 
  let text= element.options[element.selectedIndex].text;

  currentPackSize = text;
}

// ------------------------------------------------------------------------------
// Update price with Glazing and Pack Size Changes
function calculateNewPrice() {
  let priceToDisplay = (basePrice + currentGlazingPriceAdapt)*currentPackPriceMult;

  document.getElementById("detail-price").innerHTML = '$' + priceToDisplay.toFixed(2);
}

calculateNewPrice();

// ------------------------------------------------------------------------------
// Update Cart Array
function updateCart(event) {
  const addOrder = new Roll(rollType, currentGlazing, currentPackSize, basePrice);

  cart.add(addOrder);
  console.log(cart);

  saveToLocalStorage();
}

document.querySelector('#detail-cart-button').addEventListener('click',updateCart);

// ------------------------------------------------------------------------------
// Save to Local Storage
function saveToLocalStorage() {
  const rollsOrderArray = Array.from(cart);
  // console.log(rollsOrderArray);

  const rollsOrderArrayString = JSON.stringify(rollsOrderArray);
  // console.log(rollsOrderArrayString);

  localStorage.setItem('rollsInCart', rollsOrderArrayString);

  // Source: https://stackoverflow.com/questions/64903227/local-storage-keeps-resetting-on-page-reload

  // const storedOrders = JSON.parse(localStorage.getItem('rollsInCart')) || [];

  // const ['rollsInCart', setRollOrder] = useState(storedOrders);
  console.log(localStorage);
}