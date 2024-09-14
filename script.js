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
const answerContainer = document.querySelector("#answer-text");
const btns = document.querySelectorAll(".number");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const buttonValue = btn.querySelector(".num").textContent; // Get the text inside <p> tag
        answerContainer.textContent += buttonValue; // Append it to the answer box
    });
});
// clear out the answer box when an operation is selected
// step 1. assign variables to all of the operation buttons
const division = document.querySelector("#division");
const multiplication = document.querySelector("#multiplication");
const subtraction = document.querySelector("#subtraction");
const addition = document.querySelector("#addition");
const clear = document.querySelector("#clear");
//step 2. add event listeners to set text content to be empty
const operations = [division, multiplication, subtraction, addition];
operations.forEach(operation => {
    if (operation) {
        operation.addEventListener("click", () => {
            answerContainer.textContent = "";
        });
    } else {
        console.warn("Operation button not found:", operation);
    }
});
