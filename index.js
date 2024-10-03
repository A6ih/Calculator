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

function exponent(numOne, numTwo) {
    return Number(numOne) ** Number(numTwo)
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
        case "^" : result = exponent(firstNum, secondNum)
        break;
        default : result = "Not a valid operation!"
        break;
    }
    result = Math.round(result * 100) / 100;    // to avoid long decimals
    return result = result.toString();

}

const display = document.querySelector("#display");
const input = document.querySelector(".input");

input.addEventListener ("keydown", function(event) {
    event.preventDefault();
})

input.addEventListener ("click", function(event) {
    //console.log(event)
    let targetOne = event.target;
    let targetClick = targetOne.id;
    switchState(targetClick)
})

window.addEventListener ("keydown", function(event) {
    //console.log(event)
    let targetKeyDown = event.key;
    switchState(targetKeyDown)
})

function switchState(target) {
    console.log(target)
    switch(target) {
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
            if(display.textContent === "Error: can't divide by zero!"
             ||display.textContent === "Infinity" || display.textContent === "0"
            ) {
                clear()
            }
            num += target;
            display.textContent += target
            // console.log(num + "a")
            // console.log(firstNum + "b")    // for debugging
            // console.log(secondNum + "c")
        break;
        case ".":
            if(display.textContent === "Error: can't divide by zero!"
             ||display.textContent === "Infinity" || display.textContent === "0"
               ) {
                 clear()
               }
            if(num.includes(".")) {
              return;                      // will not allow more than 1 "."
            }
            num += target;
            display.textContent += target
        break;
        case "+":
        case "-":
        case "*":
        case "/":
        case "^":
        case "BracketRight":
            if(display.textContent === "Error: can't divide by zero!"
             ||display.textContent === "Infinity"
                ) {
                    return;
                  }
            if(display.textContent === "0") {
                num = "0";
            }
            if(num === "0" && operator === "/") {
                display.textContent = "Error: can't divide by zero!";
                return;
            }                       
            if(!num ||!num && operator) {
                return;                     // prevents more than 1 operator
              }                                           
            if(!firstNum) {
                getFirstNum(num);
                num = ""
            }
            else {
                getSecondNum(num);
            }
            if(secondNum && firstNum) {
                operate(firstNum, operator, secondNum);
                firstNum = result.toString();
                display.textContent = firstNum;
                secondNum = "";
            }
            if(firstNum === "Infinity") {
                return;
            }
            operator = target;
            display.textContent += ` ${operator} `;
            num = "";
        break;
        case "=" :
        case "Enter":
            if(!num) {
              return;
            }
            if(num === "0" && operator === "/") {
                display.textContent = "Error: can't divide by zero!";
                return;
            }
            if(!firstNum && !operator) {
                return;
            }
            if(!secondNum) {
                getSecondNum(num)
            }
            operate(firstNum, operator, secondNum);
            num = result.toString();
            display.textContent = num;
            firstNum = "";
            secondNum = "";
            operator = "";
        break;
        case "C":
        case "c":
            clear()
            display.textContent = "0"
        break;
        case "del":
        case "Backspace":
            if(display.textContent === "Error: can't divide by zero!"
             ||display.textContent === "Infinity" || display.textContent === "0"
                ) {
                    return;
                 }
            if(num) {
               num = num.slice(0, -1);
               display.textContent = display.textContent.slice(0, -1);
               return;
            }
            if(!num && operator) {
                operator = ""
                num = firstNum;
                firstNum = "";
                display.textContent = display.textContent.slice(0, -3);
                return;
              }
        break;
                }
}


function getFirstNum(num) {
    firstNum = num.toString();
    return firstNum;
}

function getSecondNum(num) {
    secondNum = num.toString();
    return secondNum;
}

function clear() {
    num = "";
    firstNum = "", secondNum = "" ;
    result = "";
    operator = "";
    display.textContent = "";
}