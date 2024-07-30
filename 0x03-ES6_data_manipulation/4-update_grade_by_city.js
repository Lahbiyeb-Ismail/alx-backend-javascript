export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const studentsByCity = listOfStudents.filter((student) => student.location === city);

  const newStudentsList = studentsByCity.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

    return { ...student, grade: gradeObj ? gradeObj.grade : 'N/A' };
  });

  return newStudentsList;
}
