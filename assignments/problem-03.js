/** Problem -03 ( Medicine Planner ) */
var lastDay = 11; // You can change this to test other values

// 1. Loop from day 1 to lastDay
// 2. If the day is a multiple of 3, print "medicine"
// 3. Else, print "rest"
// 4. Format output exactly like "1 - rest", "3 - medicine"

for (let day = 1; day <= lastDay; day++){
    if (day % 3 === 0) {
        console.log(`${day} - medicine`);
    } else {
        console.log(`${day} - rest`);
    }
}