/* Given three sides, determine if they form:
“Equilateral” (all equal)
“Isosceles” (any two equal)
“Scalene” (none equal)
“Not a triangle” (invalid) */

let a = 5;
let b = 5;
let c = 5;
let triangle = a + b > c && b + c > a && a + c > b;

if (triangle) {
  console.log("valid triangle");

  if (a === b && b === c) {
    console.log("It's an Equilateral");
  } else if (a === b || b === c || a === c) {
    console.log("It's an Isosceles");
    }
  else {
      console.log("It's a Scalene");
    }
} else {
  console.log("Not a triangle");
}
