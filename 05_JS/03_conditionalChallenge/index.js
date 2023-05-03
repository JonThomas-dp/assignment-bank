// 01. Create two objects and combine them into a third objects
// Using a Set

// let firstObj = {
//   id: 1,
//   name: "ryan"
// };

// let secondObj = {
//   address: "123 fake st",
//   phone: "555-555-5555"
// };

// const id = firstObj["id"];
// const name = firstObj["name"];
// const address = secondObj["address"];
// const phone = secondObj["phone"];

// let thirdObj = {
//   id,
//   name,
//   address,
//   phone
// };

// console.log(thirdObj);

// *****************************************

// 01.
// Manual steps - convert to a series of loops

// let zeroKey = Object.keys(firstObj)[0];
// let oneKey = Object.keys(firstObj)[1];
// let twoKey = Object.keys(secondObj)[0];
// let threeKey = Object.keys(secondObj)[1];

// let zeroVal = firstObj["id"];
// let oneVal = firstObj["name"];
// let twoVal = secondObj["address"];
// let threeVal = secondObj["phone"];

// let zeroKVPair = {[`${zeroKey}`]:`${zeroVal}`}
// let oneKVPair = {[`${oneKey}`]:`${oneVal}`}
// let twoKVPair = {[`${twoKey}`]:`${twoVal}`}
// let threeKVPair = {[`${threeKey}`]:`${threeVal}`}

// console.log(zeroKVPair);
// console.log(oneKVPair);
// console.log(twoKVPair);
// console.log(threeKVPair);

// for(let i = 0; )

// let thirdObj = {}

// thirdObj

// console.log(thirdObj);

// *****************************************

// 02. Given two (2) numbers check which is the largest
// Long Form

// const numOne = 9;
// const numTwo = 12;

// if(numOne > numTwo) {
//   console.log(`numOne is larger than numTwo by ${numOne - numTwo} units`)
// } else if(numTwo > numOne) {
//   console.log(`numTwo is larger than numOne by ${numTwo - numOne} units`)
// } else {
//   console.log(`Unable to run the process. Please provide numbers, not words or booleans.`)
// };

// *****************************************

// 02. 
// Ternary Form

// const numOne = 9
// const numTwo = 12

// numOne > numTwo ?
//   console.log(`numOne is larger than numTwo by ${numOne - numTwo} units`) :
// numTwo > numOne ?
//   console.log(`numTwo is larger than numOne by ${numTwo - numOne} units`) :
// console.log(`Unable to run the process. Please provide numbers, not words or booleans.`);

// *****************************************

// 03. Create a program that will title case a string (captialize the first letter of each word)
// Built-in Split Function

// let valOne = "I am a sentence";
// let valOneArray = valOne.split(" ");
// let valOneArrayLength = valOneArray.length;
// let tempCap = "";
// let valOneCapArray = [];

// for(let i = 0; i < valOneArrayLength; i++){
//   tempCap = valOneArray[i][0].toUpperCase() + valOneArray[i].slice(1);
//   valOneCapArray.push(tempCap)
// };

// valCapOne = valOneCapArray.join(" ");

// console.log(valCapOne);

// *****************************************

// 03. 
// Manual Split Function, loop all strings and break on each space, maybe create variables using i to keep them unique;
// with toString built-in

// *****************************************

// 04. Write a program that takes and returns the letters in alphabetical order
// toLowerCase, push, sort function

// let valOneRaw = "Hi there";
// let valOne = valOneRaw.toLowerCase();
// let valOneArray = [];
// let valOneLength = valOne.length;

// for(let i = 0; i < valOneLength; i++){
//   let tempVal = valOne[i];
//   if(tempVal === " ") {
//     continue;
//   } else {
//     valOneArray.push(valOne[i]);
//   }
// };

// valOneArray.sort();

// console.log(valOneArray)

// *****************************************

// 04.
// manually with push, sort and join, loops and conditionals

// let valOne = "Hi there";
// let valOneArray = [];
// let valOneLength = valOne.length;
// let valOneLower = [];

// for(let i = 0; i < valOneLength; i++){
//   let tempVal = valOne[i];
//   if(tempVal === " ") {
//     continue;
//   } else {
//     valOneArray.push(valOne[i]);
//   }
// };

// console.log(valOneArray);

// for(let i = 0; i < valOne.length; i++){
//   let tempVal = valOne[i]
//   if(tempVal === " "){
//     continue;
//   } else {
//     tempVal = valOne[i].toLowerCase();
//     valOneLower.push(tempVal);
//   }
// };

// console.log(valOneLower);

// valOneLower.sort();

// sortedVal = valOneLower.join("");

// console.log(sortedVal);

// test
// let valOne = "Hi there";
// console.log(valOne[0]);

// let valOneArray = ["H", "i", "t", "h", "e", "r", "e"];
// console.log(valOneArray[0]);

