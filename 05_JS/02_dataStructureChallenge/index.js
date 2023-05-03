// 01. Create an Object

// let dataContainer = {
//   user: {
//     id: 1,
//     name: "Ryan Curtis",
//     age: 30,
//     dob: "1/1/1993"
//   },
//   deleteme: "deletemevalue",
//   unitsCompleted: ["html", "css", "scss"],
//   unitsRemaining: ["js", "react"]
// };

// let newContainer = dataContainer["user"]["name"];

// let infoStatement = `Person ${dataContainer["user"]["id"]}, ${dataContainer["user"]["name"]}, is ${dataContainer["user"]["age"]} years old. ${dataContainer["user"]["name"]} has completed the ${dataContainer["unitsCompleted"][0]}, ${dataContainer["unitsCompleted"][1]} and ${dataContainer["unitsCompleted"][2]} units and has not completed the ${dataContainer["unitsRemaining"][0]} and ${dataContainer["unitsRemaining"][1]} units"`;

// console.log(infoStatement);

// **********************************

// 02. Create a "user" object and make changes to it

// userObj = {
//   firstName: "Jon",
//   lastName: "Thomas",
//   state: "Utah",
//   semesters: {
//     semesterOne: "incompleted",
//     semesterTwo: "incompleted",
//     semesterFour: "incompleted",
//   }
// }

// console.log(userObj);

// userObj["semesters"]["semesterOne"] = "completed"
// userObj["semesters"]["semesterTwo"] = "completed"
// userObj["semesters"].semesterThree = "completed"
// delete userObj["semesters"].semesterFour

// console.log(userObj);

// **********************************

// 03. Write a program that alternatively removes a values from either the front or end of an array
// length, shift, pop

// let arrayOne = [1, 2, 3, 4, 5]

// let arrayLength = arrayOne.length

// for(let i = arrayLength; i--;){
//   if (i % 2 === 0) {
//     arrayOne.shift();
//     console.log(arrayOne);
//   } else if ( i % 2 != 0) {
//       arrayOne.pop();
//       console.log(arrayOne);  
//   } else if ( i === 0) {
//       break;
//   } else {
//       break;
//   }
// };

// **********************************