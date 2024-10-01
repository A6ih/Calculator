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
            if(display.textContent === "Error: can't divide by zero!"
             ||display.textContent === "Infinity"
            ) {
                clear()
            }
            num += target.id;
            display.textContent += target.id
            console.log(num + "a")
            console.log(firstNum + "b")    // for debugging
            console.log(secondNum + "c")
        break;
        case ".":
            if(display.textContent === "Error: can't divide by zero!"
             ||display.textContent === "Infinity"
               ) {
                   display.textContent = "";
                   num = "";
                   firstNum = "";
               }
            if(num.includes(".")) {
              return;                      // will not allow more than 1 "."
            }
            num += target.id;
            display.textContent += target.id
        break;
        case "+":
        case "-":
        case "*":
        case "/":
        case "^":
            if(display.textContent === "Error: can't divide by zero!"
             ||display.textContent === "Infinity"
                ) {
                    clear()
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
            operator = target.id;
            display.textContent += ` ${operator} `
            num = "";
        break;
        case "=" :
            if(!num) {
              return;
            }
            if(num === "0" && operator === "/") {
                display.textContent = "Error: can't divide by zero!";
                return;
            }
            if(!firstNum) {
                getFirstNum(num)
                num = ""
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
            clear()
        break;
        case "del":
            if(display.textContent === "Error: can't divide by zero!"
             ||display.textContent === "Infinity"
                ) {
                    clear()
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
})

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