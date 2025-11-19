// Given three numbers, print which one is the largest.

let a = 5;
let b = 10;
let c = 15;

if (a === b && b === c) {
   console.log("All numbers are equal");
} 

else if (a >= b && a >= c) {
   console.log(`${a} is bigger than ${b} and ${c}`);
} 

else if (b >= a && b >= c) {
    console.log(`${b} is bigger than ${a} and ${c}`);
}

else if (c >= a && c >= b) {
    console.log(`${c} is bigger than ${a} and ${b}`);
}
