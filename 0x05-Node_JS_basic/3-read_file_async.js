const fs = require('fs/promises');

async function countStudents(filePath) {
  try {
    const fileContent = await fs.readFile(filePath, { encoding: 'utf8' });
    const fileContentLines = fileContent.trim().split('\n').slice(1);

    const numberOfStudents = fileContentLines.length;

    const fieldsMap = {};

    for (const line of fileContentLines) {
      const studentsInfo = line.split(',');
      const studentName = studentsInfo[0];
      const field = studentsInfo[studentsInfo.length - 1];

      if (!fieldsMap[field]) {
        fieldsMap[field] = { studentsCount: 0, studentsList: [] };
      }

      fieldsMap[field].studentsCount++;
      fieldsMap[field].studentsList.push(studentName);
    }

    console.log(`Number of students: ${numberOfStudents}`);
    for (const field in fieldsMap) {
      const { studentsList, studentsCount } = fieldsMap[field];
      const studentsNum = `Number of students in ${field}: ${studentsCount}.`;
      const studentsListStr = `List: ${studentsList.join(', ')}`;
      console.log(`${studentsNum} ${studentsListStr}`);
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
