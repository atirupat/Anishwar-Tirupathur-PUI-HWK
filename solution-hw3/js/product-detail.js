// Creating a class for the Glazing Dropdown Menu Options

class Glazing{
  optionName;
  priceAdaptation;

  constructor (optionName, priceAdaptation) {
    this.optionName = optionName;
    this.priceAdaptation = priceAdaptation;
  }
};

let keepOriginal = new Glazing('Keep Original',0.00);

let sugarMilk = new Glazing('Sugar Milk',0.00);

let vanillaMilk = new Glazing('Vanilla Milk',0.50);

let doubleChocolate = new Glazing('Double Chocolate',1.50);

// Create an array with the new glazing options
let glazingOptions = [];

// glazingOptions.push(keepOriginal.optionName);
// glazingOptions.push(sugarMilk.optionName);
// glazingOptions.push(vanillaMilk.optionName);
// glazingOptions.push(doubleChocolate.optionName);

// ------------------------------------------------------------------------------

function glazingChange(element) {
  // get value of selected glazing option
  const priceChange = element.value;
  console.log('Yo is this working?');

  let glazingChoice = document.querySelector('#glazing');

  glazingChoice.innerText = priceChange;
};

// The following code is adapted from the example provided with Lab 04

let selectElement = document.querySelector('#glazing');

for (i=0; i < 3; i++)
  var option = document.createElement('option');
  option.text = glazingOptions.optionName;
  option.value = glazingOptions.length - 1; 
  selectElement.add(option);

// Give it a listener for the 'change' event, which is a function that will run
// when the selected option changes. You could also do this by setting the
// onchange property of selectElement, e.g. selectElement.onchange = ...

selectElement.addEventListener('change', chooseGlazingType);

function chooseGlazingType() {
  // In this function, `this` corresponds to the select
  // element. So `this.value` will contain the value of the
  // selected option as a string.
  console.log('You selected ' + this.value);

  // We need to convert the string value to an integer
  let glazeIndex = parseInt(this.value);

  // Now retrieve the object at the index specified by the select's value
  let glazingSelected = glazingOptions[glazeIndex];

  // Update the UI
  displayGlazing(glazingSelected);
}

