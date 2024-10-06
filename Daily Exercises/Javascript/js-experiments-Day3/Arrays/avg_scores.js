
// array of scores
const myScores= [92, 98, 84, 76, 89, 99, 100];
const yourScores = [82, 98, 94, 88, 92, 100, 100]; 

// invoking the function
function getAverage(array) {

    let sum = 0;

   let arrLength = array.length;
   for(let i = 0; i < arrLength; i++) {
      sum += array[i];
   }

   let avg = Number(sum/arrLength).toFixed(2);
   return avg;
}

// calling the function and printing the average
console.log("My average score: " + getAverage(myScores));
console.log("Your average score: " + getAverage(yourScores));