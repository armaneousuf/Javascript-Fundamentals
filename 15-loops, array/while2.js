/*
FizzBuzz Challenge:

Print the numbers from 1 to 100, but:

If the number is divisible by 3, print "Fizz"

If it’s divisible by 5, print "Buzz"

If it’s divisible by both 3 and 5, print "FizzBuzz"

Otherwise, just print the number
*/


let num = 1;
while (num <= 100) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    }

    else if (num % 5 === 0) {
        console.log("Buzz");
    }

    else if (num % 3 === 0) {
        console.log("Fizz");
    }

    else {
        console.log(num);
    }

    num++;
}


// print I love you 100 times
// let text = 0;
// while (text <= 100) {
//     console.log("I love you");
//     text++;
// }

