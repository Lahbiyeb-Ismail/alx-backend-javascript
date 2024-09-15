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

  const fileContent = fs
    .readFileSync(filePath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');

  const studentGroups = {};
  const fieldsName = fileContent[0].split(',');
  const studentPropNames = fieldsName.slice(0, fieldsName.length - 1);

  for (const line of fileContent.slice(1)) {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);

    const field = studentRecord[studentRecord.length - 1];
    if (!Object.keys(studentGroups).includes(field)) {
      studentGroups[field] = [];
    }

    const studentEntries = studentPropNames
      .map((propName, idx) => [propName, studentPropValues[idx]]);

    studentGroups[field].push(Object.fromEntries(studentEntries));
  }

  const totalStudents = fileContent.length - 1;

  console.log(`Number of students: ${totalStudents}`);

  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
}

countStudents('database.csv');

module.exports = countStudents;
