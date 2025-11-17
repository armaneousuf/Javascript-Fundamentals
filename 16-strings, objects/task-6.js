let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (let count in myObject) {
    console.log(count + ":" + myObject[count] + "|" + typeof myObject[count]);
}