// ================================
// 1. CREATE AN OBJECT
// ================================

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

  // ================================
  // 4. OBJECT METHODS + this KEYWORD
  // ================================
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

// ================================
// 2. ACCESS PROPERTIES
// ================================

console.log("Student Name:", student.name);
console.log("Math Score:", student.scores.math);

// ================================
// 3. ADD NEW PROPERTIES
// ================================

student.email = "john@example.com";
student.isActive = true;

console.log("Email added:", student.email);

// ================================
// 3. UPDATE PROPERTIES
// ================================

student.age = 21;
student.course = "Full Stack Development";

console.log("Updated Age:", student.age);
console.log("Updated Course:", student.course);

// ================================
// 3. DELETE PROPERTIES
// ================================

delete student.isActive;
console.log("isActive deleted:", student);

// ================================
// 4. CALL OBJECT METHODS
// ================================

console.log(student.getStudentInfo());
console.log("Average Score:", student.getAverageScore());

// ================================
// 5. LOOP THROUGH OBJECT (for...in)
// ================================

console.log("Student Scores:");
for (let subject in student.scores) {
  console.log(subject + ":", student.scores[subject]);
}

// ================================
// 6. STUDENT RECORD SYSTEM (ARRAY + OBJECTS)
// ================================

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

// Display all students
console.log("Student Records:");
for (let i = 0; i < students.length; i++) {
  console.log(
    `ID: ${students[i].id}, Name: ${students[i].name}, Grade: ${students[i].grade}`
  );
}

// ================================
// 7. ADD NEW STUDENT
// ================================

students.push({
  id: 4,
  name: "Sarah Johnson",
  grade: "A"
});

console.log("Updated Student List:", students);
