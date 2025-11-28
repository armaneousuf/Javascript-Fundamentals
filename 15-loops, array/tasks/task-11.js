// Print the first 10 numbers of the Fibonacci sequence.

let a = 0;
let b = 1;

for (let i = 3; i <= 10; i++){
    let nextNumber = a + b;
    console.log(nextNumber);
    a = b;
    b = nextNumber;
}