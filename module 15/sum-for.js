// let sum = 0;

// for (let i = 10; i <= 50; i++) {
//     console.log("sum of the number is " + sum);
//     sum = sum + i;
// }

let sum = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log("numbers that are divisible by 3 " , i);
        sum = sum + i;
        
    }
    
}


console.log("total " , sum);