"use strict";

// Do you see that we didn't write the init function.  Instead, 
// we assigned an anonymous function to the window's onload.  
// It looks just like a named function but is missing the
// name between the word function and the ()
window.onload = function () {
    const btn = document.getElementById("submitOrder");
    btn.onclick = estimateTotalCost;

    const conRadio = document.getElementById("coneRadioBtn");
    conRadio.onclick = handleRadioButtonClick;

    const cupRadio = document.getElementById("cupRadioBtn");
    cupRadio.onclick = handleRadioButtonClick;
}

function handleRadioButtonClick() {
    let radio = document.getElementById("coneRadioBtn");
    let toppingsDiv =  document.getElementById("toppingsDiv");
    console.log(radio.checked);
    if(radio.checked) {
        toppingsDiv.style.display = "none";
    } else {
        toppingsDiv.style.display = "block";
    }

}

function estimateTotalCost() {

    let numberofscoops = document.getElementById("NumberOfScoops");
    let scoops = Number(numberofscoops.value);
    console.log(`Scoops: ${scoops}`);
    if(scoops<=0 || scoops > 4) {
        alert ("Invalid data: Number of scoops must be less than 4.");
        return;
    }
    let scoopCost = Number(2.25) + (Number(1.25) * (scoops-1));
    

    let radio = document.getElementById("coneRadioBtn");
    let toppingCost = Number(0.0);
    if(!radio.checked) {
        let sprinkles = document.getElementById("sprinkles");
        let whippedCream = document.getElementById("whippedCream");
        let hotFudge = document.getElementById("hotFudge");
        let cherry = document.getElementById("cherry");
        console.log(`Sp: ${sprinkles.checked}, whipCream: ${whippedCream.checked}, hotFudge: ${hotFudge.checked}, Cherry: ${cherry.checked}`);
        if(sprinkles.checked) {
            toppingCost += (Number(0.5));
        } else if (whippedCream.checked) {
            toppingCost += (Number(0.25));
        } else if (hotFudge.checked) {
            toppingCost += (Number(1.25));
        } else if (cherry.checked) {
            toppingCost += (Number(0.25));
        }
    } else {
        console.log("No topping cost");
    }

    let totalCost = scoopCost + toppingCost;

    console.log(`Ice cream cost: ${scoopCost}, Topping Cost: ${toppingCost}, Total Cost: ${totalCost}`);

    // display the result
    let iceCreamDiv = document.getElementById("iceCreamCost");
    iceCreamDiv.innerHTML = scoopCost;

    let toppingDiv = document.getElementById("toppingCost");
    toppingDiv.innerHTML = toppingCost;

    let totalCostDiv = document.getElementById("totalCost");
    totalCostDiv.innerHTML = totalCost;
}




