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

let num = "";
let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";

function operate(firstNum, operator, secondNum) {
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
    result = Math.round(result * 100) / 100;
    return result.toString();

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
                getFirstNum(num)
            }
            else {
                getSecondNum(num)
            }
            if(secondNum && firstNum) {
                operate(firstNum, operator, secondNum);
                display.textContent = result;
                console.log(result);
                firstNum = result;
                secondNum = "";
            }
            if(!num) {
              display.textContent = result;
            }
            operator = target.id;
            display.textContent += ` ${operator} `
            num = "";
        break;
        case "=" : if(!num) {
                      return;
                   }
                   if(!secondNum) {
                      getSecondNum(num)
                      num = "";
                   }
                   operate(firstNum, operator, secondNum);
                   display.textContent = result;
                   firstNum = result;
                   secondNum = "";
                   num = "";
        break;
                }
})

function getFirstNum(num) {
    firstNum = num.toString();
    return firstNum;
}

function getSecondNum(num) {
    secondNum = num.toString();
    return secondNum;
}