function gradingStudents(grades) {
  // Write your code here
  for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];
    if (grade < 38) continue;
    if ((grade + 1) % 5 == 0) {
      grades[i] = grade + 1;
    } else if ((grade + 2) % 5 == 0) {
      grades[i] = grade + 2;
    }
  }
  return grades;
}
