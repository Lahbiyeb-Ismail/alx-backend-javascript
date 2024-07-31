

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const table  = document.getElementById("studentsTable") as HTMLTableElement

const student_1: Student = {firstName: "Jhon", lastName: "Doe", age: 20, location: "Morocco"}

const student_2: Student = {firstName: "Adam", lastName: "Saad", age: 22, location: "USA"}

const studentsList: Student[] = [student_1, student_2]

for (const student of studentsList){
  const row = table.insertRow()
  const firstNameCell = row.insertCell(0)
  const locationCell = row.insertCell(1)

  firstNameCell.textContent = student.firstName
  locationCell.textContent = student.location
}
