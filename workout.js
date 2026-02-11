
let student = {
  id: 1,
  name: "John Doe",
  age: 20,
  course: "Software Engineering",
  scores: {
    math: 85,
    english: 78,
    programming: 92
  },

  getAverageScore: function () {
    let total = 0;
    let count = 0;

    for (let subject in this.scores) {
      total += this.scores[subject];
      count++;
    }

    return total / count;
  },

  getStudentInfo: function () {
    return `${this.name} is enrolled in ${this.course}`;
  }
};


console.log("Student Name:", student.name);
console.log("Math Score:", student.scores.math);


student.email = "john@example.com";
student.isActive = true;

console.log("Email added:", student.email);


student.age = 21;
student.course = "Full Stack Development";

console.log("Updated Age:", student.age);
console.log("Updated Course:", student.course);


delete student.isActive;
console.log("isActive deleted:", student);


console.log(student.getStudentInfo());
console.log("Average Score:", student.getAverageScore());


console.log("Student Scores:");
for (let subject in student.scores) {
  console.log(subject + ":", student.scores[subject]);
}


let students = [
  {
    id: 1,
    name: "John Doe",
    grade: "A"
  },
  {
    id: 2,
    name: "Jane Smith",
    grade: "B"
  },
  {
    id: 3,
    name: "Michael Brown",
    grade: "A"
  }
];

console.log("Student Records:");
for (let i = 0; i < students.length; i++) {
  console.log(
    `ID: ${students[i].id}, Name: ${students[i].name}, Grade: ${students[i].grade}`
  );
}

students.push({
  id: 4,
  name: "Sarah Johnson",
  grade: "A"
});

console.log("Updated Student List:", students);
