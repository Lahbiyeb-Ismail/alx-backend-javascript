export default function getStudentIdsSum(listOfStudents) {
  const studentIds = listOfStudents.map((student) => student.id);

  const sumOfIds = studentIds.reduce((a, b) => a + b, 0);

  return sumOfIds;
}
