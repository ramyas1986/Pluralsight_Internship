const prompt = require("prompt-sync")();

/* import createPrompt from 'prompt-sync';
let prompt = createPrompt(); */
function myPay() {
     
    var payRate = parseFloat(prompt("How much are you paid per hour?"));
    var hoursWorked = parseFloat(prompt("How many hours do you work?"));
    
  
    if (hoursWorked > 40) 
    {
    var overtime = payRate * 1.5 * (hoursWorked - 40); //Beginning of overtime.
    console.log(`Overtime: ${overtime}`);
    var regular = payRate * 40;
    console.log(`Regular: ${regular}`);
    var pay = overtime + regular;
    console.log(`Gross Pay including overtime of: ${pay}`);
    }
    else
    {
    var pay = payRate * hoursWorked; 
    console.log(`Gross Pay: ${pay}`);

    }
}
myPay();
