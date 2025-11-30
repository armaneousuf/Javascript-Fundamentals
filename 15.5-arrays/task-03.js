// ----------------------
// Question 3: Checking Array Membership with 'includes'
// ----------------------

// 1. Create an array of books containing different book titles

// 2. Use the includes() method to check if the array contains a "javascript" book

// 3. Print a message to the console indicating whether the element is present or not


const books = [
  "The Alchemist",
  "Sapiens",
  "JavaScript",
  "The Great Gatsby",
  "Clean Code",
];

books.includes("JavaScript");

if (books.includes("JavaScript")) {
    console.log("Yes, it exists");
}
else {
    console.log("The books is not exists");
}

