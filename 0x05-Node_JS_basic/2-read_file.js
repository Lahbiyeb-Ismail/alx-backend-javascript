const fs = require('fs');

function countStudents(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8').toString().trim().split('\n');
    const fileContentLines = fileContent.slice(1);

    const numberOfStudents = fileContentLines.length;

    const fieldsMap = {};

    for (const line of fileContentLines) {
      const studentsInfo = line.split(',');
      const studentName = studentsInfo[0];
      const field = studentsInfo[studentsInfo.length - 1];

      if (!fieldsMap[field]) fieldsMap[field] = { numberOfStudents: 0, studentsList: [] };

      fieldsMap[field].numberOfStudents++;
      fieldsMap[field].studentsList.push(studentName);
    }

    console.log(`Number of students: ${numberOfStudents}`);
    for (const field in fieldsMap) {
      console.log(`Number of students in ${field}: ${fieldsMap[field].numberOfStudents}. List: ${fieldsMap[field].studentsList.join(', ')}`);
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
