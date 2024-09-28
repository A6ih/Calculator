function add(numOne, numTwo) {
    return numOne + numTwo
}

function subtract(numOne, numTwo) {
    return numOne - numTwo
}

function multiply(numOne, numTwo) {
    return numOne * numTwo
}

function divide(numOne, numTwo) {
    return numOne / numTwo
}

let firstNum = 1
let secondNum = 1
let operator = "+"

function operate(firstNum, operator, secondNum) {
    let result;
     switch(operator) {
        case "+" : result = add(firstNum, secondNum)
        break;
        case "-" : result = subtract(firstNum, secondNum)
        break;
        case "*" : result = multiply(firstNum, secondNum)
        break;
        case "/" : result = divide(firstNum, secondNum)
        break;
        default : result = "Not a valid operation!"
        break;
    }
    return Math.round(result * 100) / 100;
}

console.log(operate(firstNum, operator, secondNum))