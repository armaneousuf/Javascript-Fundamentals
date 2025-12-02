// Task-4:
// If a given string has either 'x', replace 'x' with 'y'.
// If the string has 'X', replace 'X' with 'Y'.

const text = "Xylophone and extra examples are exciting.";

const result = text.replaceAll('x', 'y').replaceAll('X', 'Y');
console.log(result);