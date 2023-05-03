class Burger {
  constructor(meat, cheese, sauces, vegetables) {
    this.meat = meat
    this.cheese = cheese
    this.sauces = sauces
    this.vegetables = vegetables
  }
};

const PastramiBurger = new Burger("pastrami", "provolone", ["mustard", "mayo", "pesto"], ["tomatoes", "lettuce", "pickles"]);

// // 02. Create a function that will:
// splice the managed arrays of items
// return each item from alternating sides fo the array until the array is empty

let keyOfBurgerArray = Object.keys(PastramiBurger);
let popShiftKeyOfBurgerArray = Object.keys(PastramiBurger);
let lengthOfKey = keyOfBurgerArray.length;
let valOfBurgerArray = [];
let keyValOfBurgerArray = [];

for (let i = 0; i < lengthOfKey; i++) { 
  valOfBurgerArray.push(PastramiBurger[`${keyOfBurgerArray[i]}`])
  keyValOfBurgerArray[`${keyOfBurgerArray[i]}`] = `"${valOfBurgerArray[i]}"`
};

console.log(keyValOfBurgerArray)

for (let i = 0; i < lengthOfKey; i++) {
  if(i % 2 == 0) {
    delete keyValOfBurgerArray[`${popShiftKeyOfBurgerArray[0]}`]
    popShiftKeyOfBurgerArray.shift()
    console.log(popShiftKeyOfBurgerArray)
    console.log(keyValOfBurgerArray)
  } else {
    
    console.log(keyValOfBurgerArray[popShiftKeyOfBurgerArray[`${keyOfBurgerArray.length - 1}`]
    delete keyValOfBurgerArray[`${popShiftKeyOfBurgerArray[`${keyOfBurgerArray.length - 1}`]
    popShiftKeyOfBurgerArray.pop()
    console.log(popShiftKeyOfBurgerArray)
    console.log(keyValOfBurgerArray)
  }
}

console.log(keyOfBurgerArray)
console.log(popShiftKeyOfBurgerArray)
console.log(keyValOfBurgerArray)

