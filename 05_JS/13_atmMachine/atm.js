// Simple Main Menu and Input

const { maxHeaderSize } = require('http');

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

// balance = 0;

// readline.question(`Welcome
// *******

// 1) View Balance
// 2) Withdraw
// 3) Deposit
// 4) Exit Program`, input => {
//     if(input === "1") {
//         console.log("You chose 1")
//     } else if (input === "2") {
//         console.log("You chose 2")
//     } else if (input === "3") {
//         console.log("You chose 3")
//     } else if (input === "4") {
//         console.log("You chose 4")
//     } else {
//         console.log("Please choose one of the provided options")
//     }
// })

// *********************************************

// Main Menu in Function and Loop

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

// var waitForUserInput = function() {
//     readline.question(`
// Welcome
// *******

// 1) View Balance
// 2) Withdraw
// 3) Deposit
// 4) Exit Program

// >`, input => {
//         if(input === "1") {
//             console.log("\nYou chose 1")
//         } else if (input === "2") {
//             console.log("\nYou chose 2")
//         } else if (input === "3") {
//             console.log("\nYou chose 3")
//         } else if (input === "4") {
//             console.log("\nYou chose 4")
//         } else {
//             console.log("\nPlease choose one of the provided options\n")
//             waitForUserInput()
//         }
//     })
// }

// balance = 0;

// waitForUserInput()

// ***************************************************************

// View Balance Sub-Menu and Exit

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });


// var waitForUserInput = function() {
//     readline.question(`
// Welcome
// *******

// 1) View Balance
// 2) Withdraw
// 3) Deposit
// 4) Exit Program

// > `, input => {
//         if(input === "1") {
//             console.log(`\nYour account has a balance of $ ${balance.toFixed(2)}`)
//             waitForUserInput()
//         } else if (input === "2") {
//             console.log("\nYou chose 2")
//             waitForUserInput()
//         } else if (input === "3") {
//             console.log("\nYou chose 3")
//             waitForUserInput()
//         } else if (input === "4") {
//             console.log("\nThank you for using our service. Have a good day.\n")
//             process.exit(0)
//         } else {
//             console.log("\nPlease choose one of the provided options\n")
//             waitForUserInput()
//         }
//     })
// }

// balance = 0.00
// waitForUserInput()

// ***********************************************************

// Deposit Sub-Menu

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

// var depositMoney = function() {
//     readline.question(`\nHow much would you like to deposit?\n`, depositAmount => {
//         if (typeof Number(depositAmount) === "number") {
//             balance = Number(balance) + Number(depositAmount)
//             console.log(`
// You have deposited $${depositAmount}. Your new balance is $${balance.toFixed(2)}
// `)
//             console.log(`Balance: ${balance}`)
//             waitForUserInput()
//         } else {
//             console.log(`\n Please verify the amount provided is a number and try again`)
//             depositMoney()
//         }
//     });
// }

// var waitForUserInput = function() {
//     readline.question(`
    
// Welcome
// *******

// 1) View Balance
// 2) Withdraw
// 3) Deposit
// 4) Exit Program

// > `, input => {
//         if(input === "1") {
//             console.log(`\nYour account has a balance of $${balance.toFixed(2)}`)
//             waitForUserInput()
//         } else if (input === "2") {
//             console.log("\nYou chose 2")
//             waitForUserInput()
//         } else if (input === "3") {
//             depositMoney()
//         } else if (input === "4") {
//             console.log("\nThank you for using our service. Have a good day.\n")
//             process.exit(0)
//         } else {
//             console.log("\nPlease choose one of the provided options\n")
//             waitForUserInput()
//         }
//     })
// }

// balance = 0.00
// waitForUserInput()

// *****************************************************************************

// Withdraw Sub-Menu, No checks for withdraw into negative values

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

// var depositMoney = function() {
//     readline.question(`\nHow much would you like to deposit?\n`, depositAmount => {
//         if (typeof Number(depositAmount) === "number") {
//             balance = Number(balance) + Number(depositAmount)
//             console.log(`
// You have deposited $${Number(depositAmount).toFixed(2)}. Your new balance is $${balance.toFixed(2)}
// `)
//             console.log(`Balance: ${balance}`)
//             waitForUserInput()
//         } else {
//             console.log(`\n Please verify the amount provided is a number and try again`)
//             depositMoney()
//         }
//     });
// }

// var withdrawMoney = function() {
//     readline.question(`\nHow much would you like to withdraw?\n`, withdrawAmount => {
//         if (typeof Number(withdrawAmount) === "number") {
//             balance = Number(balance) - Number(withdrawAmount)
//             console.log(`
// You have withdrawn $${Number(withdrawAmount).toFixed(2)}. Your new balance is $${balance.toFixed(2)}
// `)
//             console.log(`Balance: ${balance}`)
//             waitForUserInput()
//         } else {
//             console.log(`\n Please verify the amount provided is a number and try again`)
//             withdrawMoney()
//         }
//     });
// }

// var waitForUserInput = function() {
//     readline.question(`
    
// Welcome
// *******

// 1) View Balance
// 2) Withdraw
// 3) Deposit
// 4) Exit Program

// > `, input => {
//         if(input === "1") {
//             console.log(`\nYour account has a balance of $${balance.toFixed(2)}`)
//             waitForUserInput()
//         } else if (input === "2") {
//             withdrawMoney()
//         } else if (input === "3") {
//             depositMoney()
//         } else if (input === "4") {
//             console.log("\nThank you for using our service. Have a good day.\n")
//             process.exit(0)
//         } else {
//             console.log("\nPlease choose one of the provided options\n")
//             waitForUserInput()
//         }
//     })
// }

// balance = 0.00
// waitForUserInput()

// ***********************************************************************

// Complete Menu with print statements

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

// var depositMoney = function() {
//     readline.question(`\nHow much would you like to deposit?\n`, depositAmount => {
//         if (typeof Number(depositAmount) === "number") {
//             balance = Number(balance) + Number(depositAmount)
//             console.log(`
// You have deposited $${Number(depositAmount).toFixed(2)}. Your new balance is $${balance.toFixed(2)}
// `)
//             console.log(`Balance: ${balance}`)
//             waitForUserInput()
//         } else {
//             console.log(`\n Please verify the amount provided is a number and try again`)
//             depositMoney()
//         }
//     });
// }

// var withdrawMoney = function() {
//     readline.question(`\nYour balance is $${balance.toFixed(2)}. How much would you like to withdraw?\n`, withdrawAmount => {
//         if (typeof Number(withdrawAmount) === "number") {
//             if(Number(Number(balance) - Number(withdrawAmount) < 0)) {
//                 console.log(`\nYour balance is $${balance.toFixed(2)}. Please withdraw either this or a lesser amount.`)
//                 withdrawMoney()
//             } else {
//                 balance = Number(balance) - Number(withdrawAmount)
//                 console.log(`
//     You have withdrawn $${Number(withdrawAmount).toFixed(2)}. Your new balance is $${balance.toFixed(2)}
//     `)
//                 console.log(`Balance: ${balance}`)
//                 waitForUserInput()
//             }
//         } else {
//             console.log(`\n Please verify the amount provided is a number and try again\n`)
//             withdrawMoney()
//         }
//     });
// }

// var waitForUserInput = function() {
//     readline.question(`
    
// Welcome
// *******

// 1) View Balance
// 2) Withdraw
// 3) Deposit
// 4) Exit Program

// > `, input => {
//         if(input === "1") {
//             console.log(`\nYour account has a balance of $${balance.toFixed(2)}`)
//             waitForUserInput()
//         } else if (input === "2") {
//             withdrawMoney()
//         } else if (input === "3") {
//             depositMoney()
//         } else if (input === "4") {
//             console.log("\nThank you for using our service. Have a good day.\n")
//             process.exit(0)
//         } else {
//             console.log("\nPlease choose one of the provided options\n")
//             waitForUserInput()
//         }
//     })
// }

// balance = 0.00
// waitForUserInput()

// ***************************************************************************

// Complete Menu

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

// var depositMoney = function() {
//     readline.question(`\nYour balance is $${balance.toFixed(2)}. How much would you like to deposit?\n> `, depositAmount => {
//         if (typeof Number(depositAmount) === "number") {
//             balance = Number(balance) + Number(depositAmount)
//             console.log(`
// You have deposited $${Number(depositAmount).toFixed(2)}. Your new balance is $${balance.toFixed(2)}
// `)
//             waitForUserInput()
//         } else {
//             console.log(`\n Please verify the amount provided is a number and try again`)
//             depositMoney()
//         }
//     });
// }

// var withdrawMoney = function() {
//     readline.question(`\nYour balance is $${balance.toFixed(2)}. How much would you like to withdraw?\n> `, withdrawAmount => {
//         if (typeof Number(withdrawAmount) === "number") {
//             if(Number(Number(balance) - Number(withdrawAmount) < 0)) {
//                 console.log(`\nYour balance is $${balance.toFixed(2)}. Please withdraw either this or a lesser amount.`)
//                 withdrawMoney()
//             } else {
//                 balance = Number(balance) - Number(withdrawAmount)
//                 console.log(`
//     You have withdrawn $${Number(withdrawAmount).toFixed(2)}. Your new balance is $${balance.toFixed(2)}
//     `)
//                 waitForUserInput()
//             }
//         } else {
//             console.log(`\n Please verify the amount provided is a number and try again\n`)
//             withdrawMoney()
//         }
//     });
// }

// var waitForUserInput = function() {
//     readline.question(`
    
// Welcome
// *******

// 1) View Balance
// 2) Withdraw
// 3) Deposit
// 4) Exit Program

// > `, input => {
//         if(input === "1") {
//             console.log(`\nYour account has a balance of $${balance.toFixed(2)}`)
//             waitForUserInput()
//         } else if (input === "2") {
//             withdrawMoney()
//         } else if (input === "3") {
//             depositMoney()
//         } else if (input === "4") {
//             console.log("\nThank you for using our service. Have a good day.\n")
//             process.exit(0)
//         } else {
//             console.log("\nPlease choose one of the provided options\n")
//             waitForUserInput()
//         }
//     })
// }

// balance = 0.00
// waitForUserInput()

// *************************************************************************

// Receipt Functionality - Manual - Must deposit once and withdraw once for the manual receipt to log correctly

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

// var depositMoney = function() {
//     readline.question(`\nYour balance is $${balance.toFixed(2)}. How much would you like to deposit?\n> `, depositAmount => {
//         if (typeof Number(depositAmount) === "number") {
//             balance = Number(balance) + Number(depositAmount)
//             historyArray.push({deposit: `${depositAmount}`})
//             console.log(historyArray)
//             console.log(`
// You have deposited $${Number(depositAmount).toFixed(2)}. Your new balance is $${balance.toFixed(2)}
// `)
//             waitForUserInput()
//         } else {
//             console.log(`\n Please verify the amount provided is a number and try again`)
//             depositMoney()
//         }
//     });
// }

// var withdrawMoney = function() {
//     readline.question(`\nYour balance is $${balance.toFixed(2)}. How much would you like to withdraw?\n> `, withdrawAmount => {
//         if (typeof Number(withdrawAmount) === "number") {
//             if(Number(Number(balance) - Number(withdrawAmount) < 0)) {
//                 console.log(`\nYour balance is $${balance.toFixed(2)}. Please withdraw either this or a lesser amount.`)
//                 withdrawMoney()
//             } else {
//                 balance = Number(balance) - Number(withdrawAmount)
//                 historyArray.push({withdraw: `${withdrawAmount}`})
//                 console.log(historyArray)
//                 console.log(`
//     You have withdrawn $${Number(withdrawAmount).toFixed(2)}. Your new balance is $${balance.toFixed(2)}
//     `)
//                 waitForUserInput()
//             }
//         } else {
//             console.log(`\n Please verify the amount provided is a number and try again\n`)
//             withdrawMoney()
//         }
//     });
// }

// var receiptPrint = function() {
//     console.log(`
// ***************************************
//            Bank of JavaScript               
// ***************************************
// Beginning Amount:    ${begBalance.toFixed(2)}
// Deposit:             ${Number(historyArray[0]["deposit"]).toFixed(2)}
// Withdraw:          - ${Number(historyArray[1]["withdraw"]).toFixed(2)}
// ---------------------------------------
// Remaining Balance:   ${balance}

// ***************************************
// `)
// }

// var waitForUserInput = function() {
//     readline.question(`
    
// Welcome
// *******

// 1) View Balance
// 2) Withdraw
// 3) Deposit
// 4) Exit Program

// > `, input => {
//         if(input === "1") {
//             console.log(`\nYour account has a balance of $${balance.toFixed(2)}`)
//             waitForUserInput()
//         } else if (input === "2") {
//             withdrawMoney()
//         } else if (input === "3") {
//             depositMoney()
//         } else if (input === "4") {
//             console.log("\nThank you for using our service. Have a good day.\n")
//             receiptPrint()
//             process.exit(0)
//         } else {
//             console.log("\nPlease choose one of the provided options\n")
//             waitForUserInput()
//         }
//     })
// }

// let begBalance = 0.00
// let balance = 0.00
// let historyArray = []
// waitForUserInput()

// *********************************************************************

// Receipt Functionality - Dynamic with Loops - Console.logs to help create receipt spaces

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

// var depositMoney = function() {
//     readline.question(`\nYour balance is $${balance.toFixed(2)}. How much would you like to deposit?\n> `, depositAmount => {
//         if (typeof Number(depositAmount) === "number") {
//             balance = Number(balance) + Number(depositAmount)
//             historyArray.push({deposit: `${depositAmount}`})
//             console.log(historyArray)
//             console.log(`
// You have deposited $${Number(depositAmount).toFixed(2)}. Your new balance is $${balance.toFixed(2)}
// `)
//             waitForUserInput()
//         } else {
//             console.log(`\n Please verify the amount provided is a number and try again`)
//             depositMoney()
//         }
//     });
// }

// var withdrawMoney = function() {
//     readline.question(`\nYour balance is $${balance.toFixed(2)}. How much would you like to withdraw?\n> `, withdrawAmount => {
//         if (typeof Number(withdrawAmount) === "number") {
//             if(Number(Number(balance) - Number(withdrawAmount) < 0)) {
//                 console.log(`\nYour balance is $${balance.toFixed(2)}. Please withdraw either this or a lesser amount.`)
//                 withdrawMoney()
//             } else {
//                 balance = Number(balance) - Number(withdrawAmount)
//                 historyArray.push({withdraw: `${withdrawAmount}`})
//                 console.log(historyArray)
//                 console.log(`
//     You have withdrawn $${Number(withdrawAmount).toFixed(2)}. Your new balance is $${balance.toFixed(2)}
//     `)
//                 waitForUserInput()
//             }
//         } else {
//             console.log(`\n Please verify the amount provided is a number and try again\n`)
//             withdrawMoney()
//         }
//     });
// }

// var receiptPrint = function() {

//     maxSpaceArray = []
//     maxSpace = ""

//     for(let i = 0; i < historyArray.length; i++){
//         if(String(Object.keys(historyArray[i])) === 'deposit'){
//             maxSpaceArray.push(`${String(historyArray[i]["deposit"]).length}`)
//             console.log(maxSpaceArray)
//         } else {
//             maxSpaceArray.push(`${String(historyArray[i]["withdraw"]).length}`)
//             console.log(maxSpaceArray)
//         }
//     }

//     for(let i = 0; i < maxSpaceArray.length; i++){
//         if(Number(maxSpace) < Number(maxSpaceArray[i])) {
//             maxSpace = maxSpaceArray[i]
//             console.log(maxSpace)
//         }
//     }

//     console.log(`
// ***************************************
//           Bank of JavaScript
// ***************************************
// Beginning Balance:      ${begBalance.toFixed(2)}`)

//    for(let i = 0; i < historyArray.length; i++){
//         if(String(Object.keys(historyArray[i])) === 'deposit') {
//             console.log(`historyArray[i]: ${historyArray[i]}`)
//             console.log(`historyArray[i]["deposit"]: ${historyArray[i]["deposit"]}`)
//             console.log(`historyArray[i]["deposit"].length: ${historyArray[i]["deposit"].length}`)
//             console.log(`maxSpace: ${maxSpace}`)
//             console.log(`maxSpace.length: ${maxSpace.length}`)
//             console.log(`maxSpace with periods: .${maxSpace}.`)
//             console.log(`maxspace - historyArray.length interpolated: ${maxSpace} - ${Number(historyArray[i]["deposit"].length)}`)
//             spaceBeforeNum = maxSpace - Number(historyArray[i]["deposit"].length)
//             console.log(`spaceBeforeNum: ${spaceBeforeNum}`)
//             console.log(`Deposit:                ${" ".repeat(spaceBeforeNum)}${historyArray[i]["deposit"]}.00`)
//         } else {
//             console.log(`historyArray[i]: ${historyArray[i]}`)
//             console.log(`historyArray[i]["withdraw"]: ${historyArray[i]["withdraw"]}`)
//             console.log(`historyArray[i]["withdraw"].length: ${historyArray[i]["withdraw"].length}`)
//             console.log(`maxSpace: ${maxSpace}`)
//             console.log(`maxSpace.length: ${maxSpace.length}`)
//             console.log(`maxSpace with periods: .${maxSpace}.`)
//             console.log(`maxspace - historyArray.length interpolated: ${maxSpace} - ${Number(historyArray[i]["withdraw"].length)}`)
//             spaceBeforeNum = maxSpace - Number(historyArray[i]["withdraw"].length)
//             console.log(`spaceBeforeNum: ${spaceBeforeNum}`)
//             console.log(`Withdraw:             - ${" ".repeat(spaceBeforeNum)}${historyArray[i]["withdraw"]}.00`)
//             // console.log(`Withdraw:          - ${" ".repeat((Number(maxSpace) - Number(historyArray[i]["withdraw"])).length)}${historyArray[i]["withdraw"]}.00`)            
//         }
//    }

//     console.log(`---------------------------------------
// Remaining Balance:      ${balance.toFixed(2)}
        
// ***************************************
// `)
// }

// var waitForUserInput = function() {
//     readline.question(`
    
// Welcome
// *******

// 1) View Balance
// 2) Withdraw
// 3) Deposit
// 4) Exit Program

// > `, input => {
//         if(input === "1") {
//             console.log(`\nYour account has a balance of $${balance.toFixed(2)}`)
//             waitForUserInput()
//         } else if (input === "2") {
//             withdrawMoney()
//         } else if (input === "3") {
//             depositMoney()
//         } else if (input === "4") {
//             console.log("\nThank you for using our service. Have a good day.\n")
//             receiptPrint()
//             process.exit(0)
//         } else {
//             console.log("\nPlease choose one of the provided options\n")
//             waitForUserInput()
//         }
//     })
// }

// let begBalance = 0.00
// let balance = 0.00
// let historyArray = []
// waitForUserInput()

// historyArray = [{deposit: '30000'}, {deposit: '3000'}, {withdraw: '100'}]
// rightAlignSpace = '5'

// console.log(`historyArray: ${historyArray[1]["deposit"].length}`)
// console.log(`rightAlignSpace: ${rightAlignSpace}`)
// console.log(`historyArray[1]'s space in front of value when receipt printed: ${Number(rightAlignSpace) - historyArray[1]["deposit"].length}`)
// console.log(`spaces that will be placed in front of historyArray[1]: ${" ".repeat(Number(rightAlignSpace) - historyArray[1]["deposit"].length)}.`)
// console.log(Number(rightAlignSpace) - historyArray[2]["withdraw"].length)
// let tempVal0 = " ".repeat(Number(rightAlignSpace) - historyArray[0]["deposit"].length) + historyArray[0]["deposit"]
// let tempVal1 = " ".repeat(Number(rightAlignSpace) - historyArray[1]["deposit"].length) + historyArray[1]["deposit"]
// let tempVal2 = historyArray[2]["withdraw"]
// console.log(`tempVal0 with two decimals: ${Number(tempVal0).toFixed(2)}`)
// console.log(`tempVal0: ${Number(tempVal0).toFixed(2)}`)
// console.log(`tempVal1: ${Number(tempVal1).toFixed(2)}`)
// console.log(`tempVal2: ${" ".repeat(2) + tempVal2 + ".00"}`)
// console.log(" ".repeat(Number(rightAlignSpace) - historyArray[0]["deposit"].length) + historyArray[0]["deposit"])
// // console.log(" ".repeat(Number(tempVal2).toFixed(2)) + "end")
// console.log(`working repeat: ${" ".repeat(2) + "end"}`)

// **********************************************************************

// Receipt - dynamic loops - removed console.logs

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

var depositMoney = function() {
    readline.question(`\nYour balance is $${balance.toFixed(2)}. How much would you like to deposit?\n> `, depositAmount => {
        if (typeof Number(depositAmount) === "number") {
            balance = Number(balance) + Number(depositAmount)
            historyArray.push({deposit: `${depositAmount}`})
            console.log(`
You have deposited $${Number(depositAmount).toFixed(2)}. Your new balance is $${balance.toFixed(2)}
`)
            waitForUserInput()
        } else {
            console.log(`\n Please verify the amount provided is a number and try again`)
            depositMoney()
        }
    });
}

var withdrawMoney = function() {
    readline.question(`\nYour balance is $${balance.toFixed(2)}. How much would you like to withdraw?\n> `, withdrawAmount => {
        if (typeof Number(withdrawAmount) === "number") {
            if(Number(Number(balance) - Number(withdrawAmount) < 0)) {
                console.log(`\nYour balance is $${balance.toFixed(2)}. Please withdraw either this or a lesser amount.`)
                withdrawMoney()
            } else {
                balance = Number(balance) - Number(withdrawAmount)
                historyArray.push({withdraw: `${withdrawAmount}`})
                console.log(`
You have withdrawn $${Number(withdrawAmount).toFixed(2)}. Your new balance is $${balance.toFixed(2)}
    `)
                waitForUserInput()
            }
        } else {
            console.log(`\n Please verify the amount provided is a number and try again\n`)
            withdrawMoney()
        }
    });
}

var receiptPrint = function() {

    maxSpaceArray = []
    maxSpace = ""

    for(let i = 0; i < historyArray.length; i++){
        if(String(Object.keys(historyArray[i])) === 'deposit'){
            maxSpaceArray.push(`${String(historyArray[i]["deposit"]).length}`)
        } else {
            maxSpaceArray.push(`${String(historyArray[i]["withdraw"]).length}`)
        }
    }

    for(let i = 0; i < maxSpaceArray.length; i++){
        if(Number(maxSpace) < Number(maxSpaceArray[i])) {
            maxSpace = maxSpaceArray[i]
            console.log(maxSpace)
        }
    }

    if(begBalance.length > Number(maxSpace)) {
        maxSpace = begBalance.length
        console.log(begBalance.length)
        console.log(`begBalance: ${begBalance}`)
        console.log(maxSpace)
    }

    if (balance.length > Number(maxSpace)) {
        maxSpace = balance.length
        console.log(balance.length)
        console.log(`balance: ${balance}`)
        console.log(maxSpace)
    }
    let begBalanceMaxSpace = maxSpace - String(begBalance).length
    let balanceMaxSpace = maxSpace - String(balance).length

    console.log(`
***************************************
          Bank of JavaScript
         Receipt of Activities
***************************************

    Beginning Balance:      ${" ".repeat(begBalanceMaxSpace)}${begBalance}.00

---------------------------------------
`)


   for(let i = 0; i < historyArray.length; i++){
        if(String(Object.keys(historyArray[i])) === 'deposit') {
            spaceBeforeNum = maxSpace - Number(historyArray[i]["deposit"].length)
            console.log(`    Deposit:                ${" ".repeat(spaceBeforeNum)}${historyArray[i]["deposit"]}.00`)
        } else {
            spaceBeforeNum = maxSpace - Number(historyArray[i]["withdraw"].length)
            console.log(`    Withdraw:             - ${" ".repeat(spaceBeforeNum)}${historyArray[i]["withdraw"]}.00`)
        }
   }

    console.log(`
---------------------------------------

    Remaining Balance:      ${" ".repeat(balanceMaxSpace)}${balance}.00
***************************************
`)
}

var waitForUserInput = function() {
    readline.question(`*********************************    
Welcome to the Bank of JavaScript
*********************************

1) View Balance
2) Withdraw
3) Deposit
4) Exit Program
> `, input => {
        if(input === "1") {
            console.log(`\nYour account has a balance of $${balance.toFixed(2)}`)
            waitForUserInput()
        } else if (input === "2") {
            withdrawMoney()
        } else if (input === "3") {
            depositMoney()
        } else if (input === "4") {
            console.log("\nThank you for using our service. Have a good day.\n")
            receiptPrint()
            process.exit(0)
        } else {
            console.log("\nPlease choose one of the provided options\n")
            waitForUserInput()
        }
    })
}

let begBalance = 0
let balance = 0
let historyArray = []
waitForUserInput()