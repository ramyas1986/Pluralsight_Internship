"use strict";

let menu = {
    drinks : [
       "Water", "Tea", "Sweet Tea", 
       "Coke", "Dr. Pepper", "Sprite"
     ],
    entrees : [
       "Hamburger w/ Fries", 
       "Grilled Cheese w/ Tater Tots",
       "Grilled Chicken w/ Veggies", 
       "Chicken Fried Steak w/ Mashed Potatoes",
       "Fried Shrimp w/ Coleslaw", 
       "Veggie Plate"
    ],
    desserts: [
       "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
 };

 window.onload = function() {

    // When the user selects an option in the dropdown, the
    // onStatesSelectionChanged event will be called
    const foodCategoryElement = document.getElementById("foodCategory");
    foodCategoryElement.onchange = updateItems;
 
 };
 
 function updateItems() {
    // find the value of the option selected
    const foodItemsElement = document.getElementById("foodItems");
    const foodCategoryElement = document.getElementById("foodCategory");

    while (foodItemsElement.options.length > 1) {                
        foodItemsElement.remove(1);
    }

    if (foodCategoryElement.value != "") {
       let items = menu[foodCategoryElement.value];
       for (let i=0; i < items.length; i++) {
        
        let theOption = new Option(items[i]);

        // append the option as a child of (inside) the 
        // select element
        foodItemsElement.appendChild(theOption);
       }

    }
 
  
 }
 
 