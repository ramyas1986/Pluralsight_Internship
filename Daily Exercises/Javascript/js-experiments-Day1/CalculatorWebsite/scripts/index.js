"use strict";


//Now connect clearBtn to its event handler.
function init() {

  //Find the AddBtn
  let addBtn = document.getElementById("addBtn");

  // Let AddBtn's onclick know there is a function
  // called onAddBtnClicked that should be called when
  // the button is clicked
  addBtn.onclick = onAddBtnClicked;

  // Find the subtractBtn
  let subtractBtn = document.getElementById("subtractBtn");

  // Let subtractBtn's onclick know there is a function
  // called onsubtractBtnClicked that should be called when
  // the button is clicked
  subtractBtn.onclick = onSubtractBtnClicked;

  // Find the multiplyBtn
  let multiplyBtn = document.getElementById("multiplyBtn");

  // Let multiplyBtn's onclick know there is a function
  // called onmultiplyBtnClicked that should be called when
  // the button is clicked
  multiplyBtn.onclick = onMultiplyBtnClicked;

  // Find the divideBtn
  let divideBtn = document.getElementById("divideBtn");

  // Let divideBtn's onclick know there is a function
  // called ondivideBtnClicked that should be called when
  // the button is clicked
  divideBtn.onclick = onDivideBtnClicked;
}

// We want this code to run when the user clicks the Add button
function onAddBtnClicked() {
  let number1 = document.getElementById("number1");
  let number2 = document.getElementById("number2");

  let Number1 = Number(number1.value);
  let Number2 = Number(number2.value);   

    // Adding two numbers
    let Add = Number1 + Number2;

let answer = document.getElementById("Answer");
answer.value = Add;
}

// We want this code to run when the user clicks the Subtract button
function onSubtractBtnClicked() {
    let number1 = document.getElementById("number1");
    let number2 = document.getElementById("number2");
  
    let Number1 = Number(number1.value);
    let Number2 = Number(number2.value);   
  
      // Subtracting two numbers
      let Subtract = Number1 - Number2;
  
  let answer = document.getElementById("Answer");
  answer.value = Subtract;
  }

  // We want this code to run when the user clicks the Multiply button
function onMultiplyBtnClicked() {
    let number1 = document.getElementById("number1");
    let number2 = document.getElementById("number2");
  
    let Number1 = Number(number1.value);
    let Number2 = Number(number2.value);   
  
      // Multiplying two numbers
      let Multiply = Number1 * Number2;
  
  let answer = document.getElementById("Answer");
  answer.value = Multiply;
  }

  // We want this code to run when the user clicks the Divide button
function onDivideBtnClicked() {
    let number1 = document.getElementById("number1");
    let number2 = document.getElementById("number2");
  
    let Number1 = Number(number1.value);
    let Number2 = Number(number2.value);   
  
      // Dividing two numbers
      let Divide = Number1 / Number2;
  
  let answer = document.getElementById("Answer");
  answer.value = Divide;
  }

  window.onload = init;




