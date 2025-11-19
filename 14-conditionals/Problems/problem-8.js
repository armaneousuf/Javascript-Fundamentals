/* Given a number, classify it as:
"Positive Even"
"Positive Odd"
"Negative Even"
"Negative Odd"
"Zero" */

let number;
if (number === 0) {
  console.log(`${number} is Zero`);
} else if (number > 0) {
  if (number % 2 === 0) {
    console.log(`${number} is Positive even`);
  } else {
    console.log(`${number} is Positive odd`);
  }
} else {
  if (number % 2 === 0) {
    console.log(`${number} is Negative even`);
    }
  else {
      console.log(`${number} is Negative odd`);
    }
}
