// 01. Write a program that checks if a string is blank. ***first draft***

// let dataContainer = 12;

// checkedContainer = typeof dataContainer

// if (typeof dataContainer == typeof "") {
//   console.log("true");
// } else {
//   console.log("false");
// }

// *****************************************

// 01. ***optomized***

// let dataContainer = 'howdy';

// if (typeof dataContainer === "string") {
//   console.log("true");
// } else {
//   console.log("false");
// }
// *****************************************

// 02. Write a program that checks if a string is blank.

// let dataContainer = "";
// let dataContainer = " ";
// let dataContainer = "fjfjfj";

// if(dataContainer === ""){
//   console.log("true")
// } else if(dataContainer == " "){
//   console.log("true")
// } else {
//   console.log("false")
// };

// *****************************************

// 03. Write a program that capitalizes the first character of a string.
// Slice, toUpperCase, Concat Function

// let dataContainer = "abcdef";
// let firstLetter = dataContainer[0];
// let missingFirstLetter = dataContainer.slice(1);

// console.log(missingFirstLetter);
// console.log(firstLetter);

// let capitalFirstLetter = firstLetter.toUpperCase();

// console.log(capitalFirstLetter);

// let capitalDataContainer = capitalFirstLetter.concat(missingFirstLetter);

// console.log(capitalDataContainer);

// *****************************************

// 04. Write a program that abbreviates a full name
// split function

// let name = "Ryan Curtis";

// let arrName = name.split(" ");

// console.log(arrName);

// let firstName = arrName[0];
// let lastNameInitial = arrName[1][0];

// console.log(lastNameInitial);

// let truncatedName = firstName + " " + lastNameInitial + ".";

// console.log(truncatedName);

// 05. Write a program that will truncate a sentence after a given amount of characters

// let dataContainer = "I am a long sentence";

// newDataContainer = dataContainer[0] + dataContainer[1] + dataContainer[2] + dataContainer[3] + dataContainer[4] + "..."

// console.log(newDataContainer);

// // *****************************************

// 06. Use slice to return from the "g" all the way to the end of the following sentence: 
// The practitioners grappled on the road side!

// let dataContainer = "The practitioners grappled on the road side!"

// let slicedContainer = dataContainer.slice(18);

// console.log(slicedContainer);

// // *****************************************

// 06. Use slice to return from the "g"...
// for loop and conditionals

// let dataContainer = "The practitioners grappled on the road side!";

// for(let i = 0; i < dataContainer.length; i++) {
//   let newValue = dataContainer[i];
//   if(newValue === "g") {
//     let slicedContainer = dataContainer.slice(i);
//     console.log(slicedContainer);
//     break
//   } else {
//     continue 
//   } 
// }

// // // *****************************************