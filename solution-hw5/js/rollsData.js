const rolls = {
    "Original": {
        "rollBasePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "rollBasePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "rollBasePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "rollBasePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-chocolate": {
        "rollBasePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "rollBasePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

// Create dictionary for Pack Size Price Multiplier and Glazing Modification
const glazingPriceModifiers = {
    'Keep Original': 0.00,
    'Sugar Milk': 0.00,
    'Vanilla Milk': 0.50,
    'Double Chocolate': 1.50,
  };
  
const packSizePriceModifiers = {
    '1': 1,
    '3': 3,
    '6': 5,
    '12': 10,
  };

  