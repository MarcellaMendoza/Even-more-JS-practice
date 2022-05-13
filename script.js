let firstNumber = 8
let secondNumber = 2
document.getElementById("number1").textContent = firstNumber
document.getElementById("number2").textContent = secondNumber
let output = document.getElementById("robot-answer")

let robotSays = "Mr. Robot says: "


function add () {
  let sum = firstNumber + secondNumber
  output.innerText = robotSays + sum
}

function subtract () {
  let sub = firstNumber - secondNumber
  output.innerText = robotSays + sub
}

function divide () {
  let div = firstNumber / secondNumber
  output.innerText = robotSays + div
}

function multiply () {
  let mult = firstNumber * secondNumber
  output.innerText = robotSays + mult
  
}

