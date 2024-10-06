"use strict";


//Now connect clearBtn to its event handler.
function init() {

  //Find the showBtn
  let showBtn = document.getElementById("showBtn");

  // Let showBtn's onclick know there is a function
  // called onShowBtnClicked that should be called when
  // the button is clicked
  showBtn.onclick = onShowBtnClicked;

  // Find the helloBtn
  let helloBtn = document.getElementById("helloBtn");

  // Let helloBtn's onclick know there is a function
  // called onHelloBtnClicked that should be called when
  // the button is clicked
  helloBtn.onclick = onHelloBtnClicked;

  // Find the clearBtn
  let clearBtn = document.getElementById("clearBtn");

  // Let clearBtn's onclick know there is a function
  // called onClearBtnClicked that should be called when
  // the button is clicked
  clearBtn.onclick = onClearBtnClicked;
}

// We want this code to run when the user clicks the Show button
function onShowBtnClicked() {
  let nameField = document.getElementById("nameField");
  let ageField = document.getElementById("ageField");

  let name = nameField.value;
  let age = ageField.value;   	// age is a string here

  let message =
    `Hi ${name}! I hear you are ${age} years old!`;
  const messagePara = document.getElementById("messagePara");
  messagePara.innerHTML = message;
}

// This function is called when clearBtn is clicked
function onClearBtnClicked() {
  // Find the messageDiv
  let messageDiv = document.getElementById("messageDiv");


  // Clear the contents of the div
  messageDiv.innerHTML = "";
}

// This function is called when helloBtn is clicked
function onHelloBtnClicked() {
  // Find the messageDiv
  let messageDiv = document.getElementById("messageDiv");


  // Set the contents of the div
  messageDiv.innerHTML = "Hello World!";
}

init();




