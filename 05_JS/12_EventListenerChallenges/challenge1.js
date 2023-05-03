// Manually Done

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// function convertDecHex() {
//     tempNum = 16777215
//     tempArray = []
//     tempArray.push(`${Math.floor(tempNum % 16)}`)
//     tempNum = tempNum / 16
//     tempArray.push
    
//     console.log(`TempArray: ${tempArray}`)
//     console.log(`TempNum: ${tempNum}`)

//     tempArray.push(`${Math.floor(tempNum % 16)}`)
//     tempNum = tempNum / 16
//     tempArray.push
//     console.log(`TempArray: ${tempArray}`)
//     console.log(`TempNum: ${tempNum}`)

//     tempArray.push(`${Math.floor(tempNum % 16)}`)
//     tempNum = tempNum / 16
//     tempArray.push
//     console.log(`TempArray: ${tempArray}`)
//     console.log(`TempNum: ${tempNum}`)

//     tempArray.push(`${Math.floor(tempNum % 16)}`)
//     tempNum = tempNum / 16
//     tempArray.push
//     console.log(`TempArray: ${tempArray}`)
//     console.log(`TempNum: ${tempNum}`)

//     tempArray.push(`${Math.floor(tempNum % 16)}`)
//     tempNum = tempNum / 16
//     tempArray.push
//     console.log(`TempArray: ${tempArray}`)
//     console.log(`TempNum: ${tempNum}`)

//     tempArray.push(`${Math.floor(tempNum % 16)}`)
//     tempNum = tempNum / 16
//     tempArray.push
//     console.log(`TempArray: ${tempArray}`)
//     console.log(`TempNum: ${tempNum}`)

//     tempArray.push(`${Math.floor(tempNum % 16)}`)
//     tempNum = tempNum / 16
//     tempArray.push
//     console.log(`TempArray: ${tempArray}`)
//     console.log(`TempNum: ${tempNum}`)
// }

// console.log(convertDecHex())

// ***************************************************************

// While Loop, For Loop, Draft

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// function convertDecHex() {
//     let hexValOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
//     let tempNum = decNum
//     let tempArray = []
//     let hexValArray = []
//     console.log(Math.floor(tempNum % 16))
//     tempArray.unshift(Math.floor(tempNum % 16))
//     tempNum = tempNum / 16   
//     console.log(`TempArray: ${tempArray}`)
//     console.log(`TempNum: ${tempNum}`)

//     while (tempArray.slice(0, 1) != 0) {
//         tempArray.unshift(Math.floor(tempNum % 16))
//         tempNum = tempNum / 16   
//         console.log(`TempArray: ${tempArray}`)
//         console.log(`TempNum: ${tempNum}`)
//     }    

//     for(let i = 0; i < tempArray.length; i++){
//         hexValArray.push(hexValOptions[tempArray[i] - 1])
//     }

//     for(let i = 0; i < hexValArray.length; i++){
//         if(hexValArray[i] === undefined){
//             hexValArray.splice(i, i + 1)
//         }
//     }

//     let hexVal = hexValArray.join("")

//     console.log(`hexValArray: ${hexValArray}`)
//     console.log(`hexVal: ${hexVal}`)
//     return hexVal
// }

// let decNum = getRandomInt(256)
// let hexNum = convertDecHex()

// console.log(`decNum: ${decNum}`)
// console.log(`hexNum: ${hexNum}`)

// ******************************************************************

// Final Draft - No Print Statements

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function convertDecHex() {
    let hexValOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    let tempNum = decNum
    let tempArray = []
    let hexValArray = []
    
    tempArray.unshift(Math.floor(tempNum % 16))
    tempNum = tempNum / 16   
    
    while (tempArray.slice(0, 1) != 0) {
        tempArray.unshift(Math.floor(tempNum % 16))
        tempNum = tempNum / 16   
    }    

    for(let i = 0; i < tempArray.length; i++){
        hexValArray.push(hexValOptions[tempArray[i] - 1])
    }

    for(let i = 0; i < hexValArray.length; i++){
        if(hexValArray[i] === undefined){
            hexValArray.splice(i, i + 1)
        }
    }

    let hexVal = hexValArray.join("")
    
    return hexVal
}

let decNum = getRandomInt(256)
let hexNum = convertDecHex()

console.log(`decNum: ${decNum}`)
console.log(`hexNum: ${hexNum}`)

// **********************************************************************