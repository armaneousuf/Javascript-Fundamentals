/** Practice Problem 7: Compound Interest Calculator */
var principal = 1000; // initial amount
var rate = 5; // annual interest rate in %
var years = 3; // number of years

// 1. Calculate the total amount after given years with annual compounding
// 2. Console.log the result rounded to 2 decimals

let startAmount = principal;
for (let i = 1; i <= years; i++) {
    startAmount = startAmount + (startAmount * 0.05);
}
console.log(startAmount.toFixed(2));
