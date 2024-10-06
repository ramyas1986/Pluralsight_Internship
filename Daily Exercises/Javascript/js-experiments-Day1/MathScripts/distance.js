// Function to calculate distance
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
}
 
// Driver code
console.log(distance(3, 4, 4, 3));