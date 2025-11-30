// ----------------------
// Question 6: Using the Slice Method
// ----------------------

// 1. Create an array containing the names of the seven continents.

// 2. Use the slice() method to create a new array containing only the first three continents.

// 3. Use the slice() method again to create a new array containing the continents from the fourth position to the end.

// 4. Print the original array and both new arrays.

const continents = ["Asia", "Africa", "North America", "South America", "Antarctica", "Europe", "Australia"];

const slice1 = continents.slice(0, 3);
const slice2 = continents.slice(3);

console.log(continents, slice1, slice2);

