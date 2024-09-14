function sum(a, b){
    return a + b;
}
function product(a,b) {
    return a * b;
}
function quotient(a,b) {
    return a / b;
}
function difference(a,b) {
    return a - b;
}
let result =  "";
// put the number into the textbox when the button is clicked
// assign a variable the value of the number before the operation
const answerContainer = document.querySelector("#answer-text");
const btns = document.querySelectorAll(".number1");
let num;

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const buttonValue = btn.querySelector(".num").textContent; // Get the text inside <p> tag
        answerContainer.textContent += buttonValue; // Append it to the answer box
        num = parseFloat(answerContainer.textContent); // convert the text to a number
    });
});
// clear out the answer box when an operation is selected
// step 1. assign variables to all of the operation buttons
const division = document.querySelector("#division");
const multiplication = document.querySelector("#multiplication");
const subtraction = document.querySelector("#subtraction");
const addition = document.querySelector("#addition");
const clear = document.querySelector("#clear");
//step 3. add event listeners to set text content to be empty
const operations = [division, multiplication, subtraction, addition];
let num1;
operations.forEach(operation => {
    if (operation) {
        operation.addEventListener("click", () => {
            console.log(operation);
            num1 = num;
            answerContainer.textContent = "";
            console.log(num1);
        });
    } else {
        console.warn("Operation button not found:", operation);
    }
});
clear.addEventListener("click", () => {
    answerContainer.textContent = "";
    operation = "";
});
const evaluate = document.querySelector("#equal");
let num2;
evaluate.addEventListener("click", () => {
    num2 = parseFloat(answerContainer.textContent);
    if(operation = multiplication) {
        result = product(num1, num2);
    }
    else if(operation = subtraction){
        result = difference(num1, num2);
    }
    else if(operation = addition){
        result = sum(num1, num2);
    }
    else if(operation = division){
        result = quotient(num1, num2)
    }
    answerContainer.textContent = `${result}`;
});