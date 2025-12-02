/** Problem 06 : (Current Salary) */
var experience = 30;
var startingSalary = 45000;

// 1. Increase the salary by 5% per year for 'experience' years
// 2. Round the final salary to 2 decimal places
// 3. Console.log the result

let currentSalary = startingSalary;
for (let i = 1; i <= experience; i++) {
    currentSalary = currentSalary + (currentSalary * 5 / 100);
    
}

console.log(currentSalary.toFixed(2));

