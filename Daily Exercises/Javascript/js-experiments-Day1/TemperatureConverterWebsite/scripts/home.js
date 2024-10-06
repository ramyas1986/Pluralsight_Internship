"use strict";


//Now connect clearBtn to its event handler.
function init() {

    //Find the convertToFahrenheitBtn
    let celTofahren = document.getElementById("convertToFahrenheitBtn");

    // Let convertToFahrenheitBtn's onclick know there is a function
    // called onCelToFahrenClicked that should be called when
    // the button is clicked
    if (typeof(celTofahren) != 'undefined' && celTofahren != null) {
    celTofahren.onclick = onCelToFahrenClicked;
}
    //Find the convertToCelsiusBtn
    let fahrenToCel = document.getElementById("convertToCelsiusBtn");

    if (typeof(fahrenToCel) != 'undefined' && fahrenToCel != null) {
        
    
    // Let convertToCelsius's onclick know there is a function
    // called onfahrenToCelClicked that should be called when
    // the button is clicked
    fahrenToCel.onclick = onFahrenToCelClicked;
    }
}

// We want this code to run when the user clicks the convert Fahrenheit to Celsius button
function onCelToFahrenClicked() {
  
    let celsius = document.getElementById("celsius");

    let Celsius = Number(celsius.value);

    //Convert Celsius to Fahrenheit
    let fahrenheit = (Celsius * 1.8) + 32;
    console.log(`${fahrenheit}`);

    // display the result
    let answer = document.getElementById("Answer");
    answer.value = fahrenheit;
}

// We want this code to run when the user clicks the convert Celsius to Fahrenheit button
function onFahrenToCelClicked() {
    let fahrenheit = document.getElementById("fahrenheit");
    

    //let Celsius = Number(fahrenheit.value);

    //Convert Celsius to Fahrenheit
    let celsius = (fahrenheit.value - 32) / 1.8;
    console.log(`${celsius}`);

    // display the result
    let answer = document.getElementById("Answer");
    answer.value = celsius;
}

window.onload = init;

