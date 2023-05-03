function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function checkUserInput() {
  if(userInput != "rock" && userInput != "paper" && userInput != "scissors"){
    console.log("Please choose one of the provided options")
  } else {
    letsPlay = true
  }
}

function createCpuInput() {
  let cpuNumber = getRandomInt(3)  
  if(cpuNumber === 0){
    cpuInputLocal = "rock"
  } else if(cpuNumber === 1) {
    cpuInputLocal = "paper"
  } else {
    cpuInputLocal = "scissors"
  }
  return cpuInputLocal
}

function gamePlay() {

    let outcome = ""

    if(letsPlay === true) {
        if(userInput === cpuInput) {
            console.log("Draw");
            outcome = "Draw"
        } else {
            if(userInput === "rock" && cpuInput === "paper") {
                console.log("Computer wins")
                outcome = "Computer wins"
            } else if(userInput === "rock" && cpuInput === "scissors") {
                console.log("Player wins")
                outcome = "Player wins"
            } else if(userInput === "paper" && cpuInput === "rock") {
                console.log("Player wins")
                outcome = "Player wins"
            } else if(userInput === "paper" && cpuInput === "scissors") {
                console.log("Computer wins")
                outcome = "Computer wins"
            } else if(userInput === "scissors" && cpuInput === "rock") {
                console.log("Computer wins")
                outcome = "Computer wins"
            } else if(userInput === "scissors" && cpuInput === "paper") {
                console.log("Player wins")
                outcome = "Player wins"
            }
        }
    }
    
    return outcome
};

let letsPlay = false
const userInput = prompt("Select Rock, Paper, or Scissors > ").toLowerCase()
console.log(userInput)
document.getElementById("user-input").innerHTML = userInput

let cpuInput = createCpuInput()
console.log(cpuInput)
document.getElementById("cpu-input").innerHTML = cpuInput

checkUserInput()
let outcomeOutput = gamePlay()

document.getElementById("outcome").innerHTML = outcomeOutput