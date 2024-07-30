export default function getStudentsByLocation(listOfStudents, city) {
  const studentsByLocation = listOfStudents.filter((student) => student.location === city);

  return studentsByLocation;
}
