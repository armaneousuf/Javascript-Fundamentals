/** Practice Problem 6: Count Even and Odd Numbers in an Array */
var numbers = [1, 2, 3, 4, 5, 6]; // You can change the values to test

// 1. Count how many numbers are even and how many are odd
// 2. Console.log both counts

let evenNum = 0;
let oddNum = 0;

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0) { 
        evenNum++;
    } else {
        oddNum++;
    }
}

console.log("Total even numbers:" + evenNum);
console.log("Total odd numbers:" + oddNum);