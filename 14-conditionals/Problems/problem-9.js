/* Given a temperature in Celsius, print:
Above 40 → “Extremely Hot”
30–40 → “Hot”
20–29 → “Warm”
10–19 → “Cool”
0–9 → “Cold”
Below 0 → “Freezing” */


let temp = 25;
if (temp > 40) {
    console.log(`${temp} is Extremely Hot`);
}

else if (temp >= 30 && temp <= 40) {
    console.log(`${temp} is Hot`);
}

else if (temp >= 20 && temp <= 29) {
    console.log(`${temp} is Warm`);
}

else if (temp >= 10 && temp <= 19) {
    console.log(`${temp} is Cool`);
}

else if (temp >= 0 && temp <= 9) {
    console.log(`${temp} is Cold`);
}

else {
    console.log("It's Freezing");
}