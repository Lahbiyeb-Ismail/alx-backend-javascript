const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) reject(new Error('Cannot load the database'));

      if (data) {
        const fileContentLines = data.toString('utf-8').trim().split('\n').slice(1);

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

        for (const [field, fieldInfo] of Object.entries(fieldsMap)) {
          const { studentsList, studentsCount } = fieldInfo;
          const studentsNum = `Number of students in ${field}: ${studentsCount}.`;
          const studentsListStr = `List: ${studentsList.join(', ')}`;
          console.log(`${studentsNum} ${studentsListStr}`);
        }

        resolve(true);
      }
    });
  });
}

countStudents('database.csv');

module.exports = countStudents;
