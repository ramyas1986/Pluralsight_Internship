"use strict";

// Do you see that we didn't write the init function.  Instead, 
// we assigned an anonymous function to the window's onload.  
// It looks just like a named function but is missing the
// name between the word function and the ()
window.onload = function () {
    const btn = document.getElementById("EstimateTotalCost");
    btn.onclick = estimateTotalCost;
}



function estimateTotalCost() {

    let pickUpDate = document.getElementById("pickupDate");
    console.log(pickUpDate.value);
    let datepick = new Date(pickUpDate.value);
    if (datepick < new Date()) {
        console.error(`Select a future date`);
        return;
    }

    let numberofdays = document.getElementById("NumberOfDays");

    let days = Number(numberofdays.value);

    let extraPerDay = Number(0);

    let tollTagChkbox = document.getElementById("tollTagChkbox");
    if (tollTagChkbox.checked) {
        extraPerDay += Number(3.95);
    }

    let gpsChkbox = document.getElementById("gpsChkbox");
    if (gpsChkbox.checked) {
        extraPerDay += Number(2.95);
    }

    let roadsideChkbox = document.getElementById("roadsideChkbox");
    if (roadsideChkbox.checked) {
        extraPerDay += Number(2.95);
    }

    let yes = document.getElementById("yesRadioBtn");
    let no = document.getElementById("noRadioBtn");

    let basePremium = Number(29.9);
    let optionCharges = extraPerDay * days;

    let under25Charges = Number(0.0);
    if (yes.checked) {
        under25Charges = Number((0.3) * (basePremium) * (days)).toPrecision(4);
        console.log(typeof under25Charges);
        under25Charges = Number(under25Charges);
        console.log(typeof under25Charges);
    }

    let carRental = basePremium * days;

    let totalCost = carRental + optionCharges + under25Charges;
    console.log(`Car Rental : ${carRental}`);
    console.log(`Option Charges : ${optionCharges}`);
    console.log(`Under 25 charges : ${under25Charges}`);
    console.log(`Total Cost : ${totalCost}`);

    // display the result
    let carRentalPrice = document.getElementById("carRental");
    carRentalPrice.innerHTML = carRental;

    let optionalChargesprice = document.getElementById("Options");
    optionalChargesprice.innerHTML = optionCharges;

    let under25surcharge = document.getElementById("under25surchage");
    under25surcharge.innerHTML = under25Charges;

    let totalDueAmount = document.getElementById("totaldue");
    totalDueAmount.innerHTML = totalCost;
}




