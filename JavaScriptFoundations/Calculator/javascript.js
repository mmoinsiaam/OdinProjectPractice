let arr = [];

let display = document.querySelector("#display");

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let clearBtn = document.querySelector("#clear");
let equalsBtn = document.querySelector(".equals");

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click",displayNum);
}

for(let i = 0; i < operators.length; i++){
    operators[i].addEventListener("click",addOperator);
}

clearBtn.addEventListener("click",clear);
//equalsBtn.addEventListener("click",evaluate);

function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return (num1 / num2).toFixed(3); //Reduces ret val to 3 decimal places.
}

function operate(operator,num1,num2){
    if(isNaN(num1) || isNaN(num2)){
        alert("Invalid Input");
        return;
    }
    
    if(operator === "+"){
        return add(num1,num2);
    }else if(operator === "-"){
        return subtract(num1,num2);
    }else if(operator === "*"){
        return multiply(num1,num2);
    }else if(operator === "/"){
        return divide(num1,num2);
    }
}

function displayNum(e) { 
    let val = e.target.textContent;
    if(arr.length === 0){
        arr.push(val);
        display.textContent = arr[0];
    }else if(arr.length === 1){
        arr[0] = arr[0] + "" + val; 
        display.textContent = arr[0];
    }else if(arr.length === 2){
        arr.push(val);
        display.textContent = arr[2];
    }else if(arr.length === 3){
        arr[2] = arr[2] + "" + val;
        display.textContent = arr[2];
    }

    console.log(arr);
}

function addOperator(e) {
    arr.push(e.target.textContent);
}

function clear() {
    display.textContent = "";
    arr = [];
    console.log(arr);
}