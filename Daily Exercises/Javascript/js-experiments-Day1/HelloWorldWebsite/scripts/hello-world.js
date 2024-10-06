//JS Program 1 - Hello World !

"use strict";

function showGreeting() {
   // Find the messageDiv element
   let messageDiv = document.getElementById("messageDiv");

   // Set its contents to "Hello World!"
   messageDiv.innerHTML = "Hello World from JS!";
}       

// call the showGreeting() function when the .js
// file loads and this line is encountered
showGreeting();
