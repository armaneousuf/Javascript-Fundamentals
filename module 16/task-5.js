const student = {
  name: "Liam Khan",
  age: 19,
  subjects: {
    math: 85,
    english: 78,
    physics: 90,
    chemistry: 88,
  },
  isGraduated: false,
};

const count = Object.keys(student.subjects).length;
console.log(count);