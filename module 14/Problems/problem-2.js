// Problem 2: Grade Calculator

// Ask the user for a score (0–100) and print the grade:

// 90–100 → A

// 75–89 → B

// 60–74 → C

// Below 60 → F

const NUMBER = 32;
if (NUMBER >= 90) {
    console.log(`You've got an A`);
}
else if (NUMBER >= 75) {
    console.log(`You've got B`);
}
else if (NUMBER >= 60) {
    console.log(`You've got C`);
}
else {
    console.log(`You've got F`);
}