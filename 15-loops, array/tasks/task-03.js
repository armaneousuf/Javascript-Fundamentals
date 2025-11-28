/***

Find all the even numbers from 78 to 98.

 */

let num = 78;
while (num <= 98) {
    // console.log(num);
    if (num % 2 === 0) {
        console.log(num, "The number is even");
    }
    num++;
}