"use strict";

// Object to include name, address, city, state, zip

let myInfo = {
    name: "Ramya S",
    address: "BTM 1st Stage",
    city: "Bengaluru",
    state: "Karnataka",
    zip: "560068"
};

// invoking the function
function printContact(infoObj) {
    console.log(`${infoObj.name}`);
    console.log(`${infoObj.address}`);
    console.log(`${infoObj.city}, ${infoObj.state} ${infoObj.zip}`);
};

//calling the function
printContact(myInfo);

