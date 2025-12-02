/** Problem 05 - ( PH Email Generator ) */
var student = { name: "jhankar", roll: 1014, department: "cse" };

// 1. Generate an email in the format: name + roll + "." + department + "@ph.ac.bd"
// 2. Console.log the generated email

const result = `${student.name}${student.roll}.${student.department}@ph.ac.bd`;
console.log(result);