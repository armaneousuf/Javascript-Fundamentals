// Problem 5: Leap Year Checker
// Task:
// Ask the user for a year.
// Print whether it is a leap year or not.
// Leap year rules
// A year is divisible by 4 → it might be a leap year
// If the year is divisible by 100 → it is NOT a leap year, unless
// The year is divisible by 400 → it IS a leap year

let year = 2000;
if (year % 400 === 0) {
    console.log(`${year} is a leap year`);
}
else if (year % 100 === 0) {
    console.log(`${year} is not a leap year`);
}
else if (year % 4 === 0) {
    console.log(`${year} is a leap year`);
}
else {
    console.log(`${year} is not a leap year`);
}


