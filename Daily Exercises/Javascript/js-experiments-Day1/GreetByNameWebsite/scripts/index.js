"use strict";

//Now connect clearBtn to its event handler.
function init() {

    //Find the GreetUserBtn
    let greetUserBtn = document.getElementById("greetUserBtn");

      // Let GreetUserBtn's onclick know there is a function
  // called onGreetUserBtnClicked that should be called when
  // the button is clicked
    greetUserBtn.onclick = onGreetUserBtnClicked;

}

// We want this code to run when the user clicks the Show button
function onGreetUserBtnClicked() {
  let nameField = document.getElementById("nameField");
  

  let name = nameField.value;


  let message =
    `Hello ${name}!`;
  const messageDiv = document.getElementById("messageDiv");
  messageDiv.innerHTML = message;
}

window.onload = init;




