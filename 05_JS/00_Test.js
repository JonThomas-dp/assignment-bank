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
  
  let valOfBurgerArray = [];
  let keyValOfBurgerArray = [];
  
  for (let i = 0; i < keyOfBurgerArray.length; i++) { 
    valOfBurgerArray.push(PastramiBurger[`${keyOfBurgerArray[i]}`])
    keyValOfBurgerArray[`${keyOfBurgerArray[i]}`] = `"${valOfBurgerArray[i]}"`
  };
  
  console.log(keyValOfBurgerArray);
  
  console.log(keyValOfBurgerArray)