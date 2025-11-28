/*

Implement a JavaScript program that uses a for loop to calculate and display the sum of all numbers that are multiples of 3 within the range of 100 to 200 (inclusive).

*/

let sum = 0;
for (let num = 100; num <= 200; num++) {
    if (num % 3 === 0) {
        sum = sum + num;
    }
}

console.log(sum);

