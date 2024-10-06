// declares an array that contains objects you ordered the last time you ate out
let lunch = [
    {item: "Chicken Fajitas", price: 19.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
  ];

  function totalDue(array) {
    let sum = 0;
    let arrLength = array.length;
    for(let i = 0; i < arrLength; i++) {
        sum += array[i].price;
     }
    sum += Number(sum * 0.08);
    sum += Number(sum * 0.18);
    return Number(sum).toFixed(4);
  }

  console.log("Total Due: " + totalDue(lunch));