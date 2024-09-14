const fs = require('fs');

/**
 * Counts the number of students and their respective
 * fields from a given file path.
 *
 * @param {string} filePath - The path to the file containing student
 * information.
 * @throws {Error} If the file does not exist or is not a valid file.
 * @returns {void}
 */
function countStudents(filePath) {
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    throw Error('Cannot load the database');
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8').toString().trim();
  const fileContentLines = fileContent.split('\n').slice(1);

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
}

module.exports = countStudents;
