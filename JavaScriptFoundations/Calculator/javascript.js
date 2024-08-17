let arr = [];

let display = document.querySelector("#display");

let buttons = document.querySelectorAll(".number,.operator");
let clearBtn = document.querySelector("#clear");
let equalsBtn = document.querySelector(".equals");

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",populateDisplay);
}

//clearBtn.addEventListener("click",clear);
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

function populateDisplay(e) { 
    let val = e.target.textContent;
    if(isNaN(val)){
        display.textContent = display.textContent + " " + val + " ";
    }else{
        display.textContent = display.textContent + val;
    }
    arr = display.textContent.split(" ").filter((word) => word !== "");
    console.log(arr);
}

