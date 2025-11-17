// USING KEYS SYNTEXT

const hardDrive = {
    name: "amdRyzen",
    processor: "msi",
    ram: "corsair",
    ssd: "512gb"
}

const keys = Object.keys(hardDrive);
// console.log(keys);

// USING VALUES

const mySelf = {
    name: "arman",
    age: "25",
    country: "bangladesh",
    city: "narayangaj",
    what: "yes"
}

const values = Object.values(mySelf);
// console.log(values);

// NESTED ONES

let student = {
    name: "John Doe", 
    age: "25",
    grade: "meh",
    subject: ["English", "Poetry", "Literature", "Accounting"],
    address: {
        city: "Bangladesh",
        zipcode: "2100",
        street: "Ekkarleman"
    }
}

let nestedObject = Object.keys(student);
console.log(student.address.city);
// console.log(student.subject[0]);