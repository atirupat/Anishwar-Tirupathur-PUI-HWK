// Create Global Variables
let basePrice = 2.49;

let currentGlazingPriceAdapt;
let currentPackPriceMult;

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
  console.log('You selected glaze' + element.value);

  // We need to convert the string value to an integer
  currentGlazingPriceAdapt = parseFloat(element.value);

  calculateNewPrice();
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
  console.log('You selected pack ' + element.value);

  // We need to convert the string value to an integer
  currentPackPriceMult = parseFloat(element.value);

  calculateNewPrice();
}

// ------------------------------------------------------------------------------
// Update price with Glazing and Pack Size Changes
function calculateNewPrice() {
  let priceToDisplay = (basePrice + currentGlazingPriceAdapt)*currentPackPriceMult;

  document.getElementById("detail-price").innerHTML = '$' + priceToDisplay.toFixed(2);
}

calculateNewPrice();