// ----------------------
// Question 7: Using the Splice Method
// ----------------------

// 1. Create an array of fruits.

// 2. Use the splice() method to remove two fruits from the middle of the array.
//    (Ensure the array has at least 5-6 fruits initially)

// 3. Use the splice() method again to add three new fruits to the beginning of the original array.

// 4. Print the final, modified array to the console.


const fruits = ["Apple", "Mango", "Lichi", "Banana", "Jackfruit", "Guava"]; 

fruits.splice(2, 2);
console.log(fruits);
fruits.splice(0, 0, "Papaya", "Pinapple", "Grape");
console.log(fruits);


