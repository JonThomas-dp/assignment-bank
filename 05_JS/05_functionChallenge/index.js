// 01. Write a program that takes an array of words and returns the longest word.
// manual, with conditionals

// function longestWord(a, b, c){
//   let stringZero = a
//   let stringOne = b
//   let stringTwo = c
  
//   if(stringZero.length > stringOne.length && stringZero.length > stringTwo.length){
//     console.log(`${stringZero} has the largest string`)
//   } else if(stringOne.length > stringZero.length && stringOne.length > stringTwo.length){
//     console.log(`${stringOne} has the largest string`)
//   } else if(stringTwo.length > stringZero.length && stringTwo.length > stringOne.length){
//     console.log(`${stringTwo} has the largest string`)
//   } else {
//     console.log("Two or more strings are the same length")
//   }

// }

// longestWord('a', 'bb', 'ccc')

// *************************************************************

// 02. Write a program that swaps the first and last characters of a string

// function firstLastSwap(a){
//   let myString = a;
//   if(typeof myString === 'string') {
//     let firstLetter = myString.slice(0, 1)
//     let lastLetter = myString.slice(-1)
//     let createdString = `${lastLetter}${myString.slice(1, `${myString.length - 1}`)}${firstLetter}`
//     return createdString
//   } else {
//     console.log("Provided value is not a string. Cannot process firstLastSwap function.")
//   }
// }

//  let newString = firstLastSwap("leather")
//  console.log(newString)

// *************************************************************

// 03. Write a program that finds the sum of a list of numbers

// function sumFunc(a, b, c, d, e, f, g){
//   let newArray = [a, b, c, d, e, f, g]
//   let sumOfArray = newArray[0] + newArray[1] + newArray[2] + newArray[3] +  newArray[4] +  newArray[5] + newArray[6] 
//   return sumOfArray
// }

// let finalSum = sumFunc(1, 10, 100, 1000, 10000, 100000, 1000000)
// console.log(finalSum)

// *************************************************************

// 04. Combine two arrays by alternatingly taking elements from each at every iteration

// let arrayZero = [1, 2, 3]
// let arrayOne = [4, 5, 6]

// function alternatePushFunc(a, b) {
//   a = arrayZero
//   b = arrayOne
//   let arrayZeroOne = []
  
//   for(let i = 0; i < arrayZero.length; i++){
//     let aSlice = a.slice(i, `${i + 1}`)
//     arrayZeroOne.push(...aSlice)
//     let bSlice = b.slice(i, `${i + 1}`)
//     arrayZeroOne.push(...bSlice)
//   }

//   return arrayZeroOne
// }

// console.log(alternatePushFunc(arrayZero, arrayOne))

// *************************************************************

// 05. Create a title case program

// let myString = "i am a sentence"

// function titleFunc(myString){

//   let myStringArray = myString.split(" ")
//   let myCapStringArray = []
  
//   for(let i = 0; i < myStringArray.length; i++){
//     let tempVal = myStringArray[i][0].toUpperCase() + myStringArray[i].slice(1)
//     myCapStringArray.push(tempVal)
//   }
  
//   let myCapString = myCapStringArray.join(" ")
  
//   return myCapString
// }

// let myStringWithTitleCase = titleFunc(myString)
// console.log(myStringWithTitleCase)

// *************************************************************

// 06. 

let myString = "This string has several different values"

function longestWord(myString) {
  let myArray = myString.split()
  console.log(myArray)
  let myWordLengthArray = []
  for(let i = 0; i < myString.length; i++) {
    myWordLengthArray.push(myArray[`${i}`].length)
    console.log(myWordLengthArray)
  }
}

// longestWord(myString)

// I had a shift in thinking during this challenge task 06 that made coding effortless and needs to be repeated more quickly in the road of developers. I was working on this function trying to create a large conditional statement between all of the different strings. While working my brain instinctfully shifting focus from keeping the strings attached and to simply create an array with the length (as a number value) of each string.

// This shift of thought reminds me of being an excel pivot table. I look at a record and generate a new field to help me solve the challenge. I place the field "word" (which is the word at face value, like the word "This") and in the value portion (the bottom-right field of a pivot table interface) and say "sum of total length of the characters" and generate a new chart with numbers (making 4 represent "this").

// The changing of data now removes the incessant use of .length in a series of conditional statements to simply a series of checks

// 07. Write a program that takes a string and returns the letters in alphabetical order

// let myString = "Hi there";
// let myArray = [];

// function alphabetizeString(myString){
//   for(let i = 0; i < myString.length; i++){
//     if(myString[i] != " ") {
//       myArray.push(myString[i].toLowerCase())  
//     }
//   }
//   myArray.sort()
//   let alphaString = myArray.join("")  
// }

// let newCreatedString = alphabetizeString(myString)

// console.log(newCreatedString)

// *************************************************************

// 08. Write a program that returns extracted values from an array using specified indices and puts them into a new array

// let valArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
// let newValArray = [];
// let chosenElementArray = [2, 4, 5, 7];

// function sliceArray(valArray, newValArray, chosenElementArray){
//   for(let i = 0; i < chosenElementArray.length; i++) {
//     let chosenElement = chosenElementArray[i];
//     let tempVal = valArray.slice(chosenElement, `${chosenElement + 1}`);
//   newValArray.push(...tempVal);
//   }  
//   return newValArray
// }

// slicedArray = sliceArray(valArray, newValArray, chosenElementArray)
// console.log(slicedArray)

// *************************************************************

// 09. 
// a. Create an object name 'user'
// userName property should take any string value
// starter (default) for the activeStatus proeprty should be set to 'away'

// let user01 = {
//   userName: "ryan",
//   activeStatus: "away"
// }

// b. Write an arrow function
// changes the activeStatus to active
// returns an interpolated string that continas the userName4 and acativeStatus values

// const changeStatus = (user) => {
//   user["activeStatus"] = "active"
//   console.log(`username ${user01["userName"]}'s status has been changed to ${user01["activeStatus"]}`)
// }  

// changeStatus(user01)

// console.log(user01)

// 10. Write a function that takes a base value and an exponent and will return the product (power)

// function expPower(a,b) {
//   expVal = a;
  
//   for(let i = 0; i < b - 1; i++){
//     expVal = expVal * a
//     console.log(expVal)
//   }
//   console.log(`as a check, the exponent equation should equal ${a ** b}`)
//   return expVal
// }

// newVal = expPower(12,6)
// console.log(newVal)

// *************************************************************

