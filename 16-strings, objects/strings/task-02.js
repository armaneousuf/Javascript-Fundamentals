// Task-2:
// Count how many times a string has the letter 'a' or 'A'

const text = "I am learning JavaScript and practicing daily.";

const textCount = text.split('a').length - 1;
const textCount2 = text.split('A').length - 1;
console.log(textCount + textCount2);