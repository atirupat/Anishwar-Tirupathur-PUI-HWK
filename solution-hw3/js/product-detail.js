// Creating an array for the Glazing Dropdown Menu Options

let glazingOptions = [
  'Keep original',
  'Sugar milk',
  'Vanilla milk',
  'Double chocolate'
];

function glazingChange(element) {
  // get value of selected glazing option
  const priceChange = element.value;
  console.log('Yo is this working?');

  let glazingChoice = document.querySelector('#glazing');

  glazingChoice.innerText = priceChange;
};

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

var option = document.createElement('option');
option.text = glazingOptions.value;
option.value = glazingOptions.length - 1; // Its value should be the index of the last element in allCars
selectElement.add(option);

// Give it a listener for the 'change' event, which is a function that will run
// when the selected option changes. You could also do this by setting the
// onchange property of selectElement, e.g. selectElement.onchange = ...
selectElement.addEventListener('change', chooseGlazingType);

let selectElement = document.querySelector('#glazing');