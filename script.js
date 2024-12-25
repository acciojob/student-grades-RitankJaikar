//your JS code here. If required.
const students = [
  {
    "name": "John",
    "grades": [80, 75, 90, 85]
  },
  {
    "name": "Alice",
    "grades": [70, 85, 75, 80]
  },
  {
    "name": "Bob",
    "grades": [90, 95, 85, 80]
  }
]


// Function to calculate the average grade
const calculateAverage = (grades) => {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return (total / grades.length).toFixed(2); // Round to 2 decimal places
};

students.forEach(student => {
  const averageGrade = calculateAverage(student.grades);
  console.log(`Name: ${student.name}, Average Grade: ${averageGrade}`);
});