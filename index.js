function add(numOne, numTwo) {
    return Number(numOne) + Number(numTwo)
}

function subtract(numOne, numTwo) {
    return Number(numOne) - Number(numTwo)
}

function multiply(numOne, numTwo) {
    return Number(numOne) * Number(numTwo)
}

function divide(numOne, numTwo) {
    return Number(numOne) / Number(numTwo)
}

let num;
let firstNum;
let secondNum;
let operator;
let result;

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

const display = document.querySelector("#display");
const input = document.querySelector(".input");

input.addEventListener ("click", function(event) {
    let target = event.target;
    switch(target.id) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            num += target.id;
            display.textContent += target.id
            console.log(num + "a")
            console.log(firstNum + "b")
            console.log(secondNum + "c")
        break;
        case "+":
        case "-":
        case "*":
        case "/":
            if(!firstNum) {
                firstNum = +num
                num = ""
            }
            else {
                secondNum = +num;
                num = ""
            }
            if(secondNum !== !secondNum && firstNum !== !firstNum) {
                result = operate(firstNum, operator, secondNum);
                display.textContent = result;
                firstNum = result;
                secondNum = "";
                operator = "";
            }
            operator = target.id;
            display.textContent += ` ${operator} `
        break;
        case "=" : result = operate(firstNum, operator, secondNum)
                   display.textContent = result;
                   firstNum = result;
        }
})
