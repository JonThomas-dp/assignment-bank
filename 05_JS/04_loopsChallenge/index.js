// 01. Write a program that counts to 10 by 2's

// numVar = 1000;

// for(let i = 0; i < numVar + 2; i = i + 2){
//   console.log(i);
// }

// *********************************************

// 02. Write a program that extracts values form an array at speecific indices and returns the values in a new array.

let valArray = ["a", "b", "c", "d", "e", "f", "g", "h"];

let newValArray = [];

let chosenElementArray = [2, 4, 5, 7];

for(let i = 0; i < chosenElementArray.length; i++) {
  let chosenElement = chosenElementArray[i];
  let tempVal = valArray.slice(chosenElement, `${chosenElement + 1}`);
newValArray.push(...tempVal);
  console.log(tempVal);
}
  
console.log(newValArray);