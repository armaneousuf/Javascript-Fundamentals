// ----------------------
// Question 4: Checking if it's an Array
// ----------------------

// 1. Create different variables, each containing either an array or a non-array value

// 2. Use Array.isArray() to check if each variable is an array

// 3. Print a message to the console indicating whether each variable is an array or not

const fruits = ["Apple", "Banana", "Cherry"];
const age = 25;
const myObject = { name: "Alice", id: 101 };
const sentence = "Hello World";
const emptyArray = [];


const isFruitArray = Array.isArray(fruits);
const isAgeArray = Array.isArray(age);
const isObjectArray = Array.isArray(myObject);
const isSentenceArray = Array.isArray(sentence);
const isEmptyArray = Array.isArray(emptyArray);

if (isFruitArray) {
    console.log("Yes, Fruits is an array");
} 
else {
    console.log("No, it's not");
}

if (isAgeArray) {
  console.log("Yes, Age is an array");
} else {
  console.log("No, it's not");
}

if (isObjectArray) {
  console.log("Yes, Object is an array");
} else {
  console.log("No, it's not");
}

if (isSentenceArray) {
  console.log("Yes, Sentence is an array");
} else {
  console.log("No, it's not");
}

if (isEmptyArray) {
  console.log("Yes, EmptyArray is an array");
} else {
  console.log("No, it's not");
}

