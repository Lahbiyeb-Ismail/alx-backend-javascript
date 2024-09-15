const fs = require('fs');
const express = require('express');

const app = express();
const PORT = 1245;
const FILE_PATH = process.argv[2] || '';

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) reject(new Error('Cannot load the database'));

      if (data) {
        const fileContent = data
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

        const studentsData = [`Number of students: ${totalStudents}`];

        for (const [field, group] of Object.entries(studentGroups)) {
          const studentNames = group.map((student) => student.firstname).join(', ');
          studentsData.push(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
        }

        resolve(studentsData.join('\n'));
      }
    });
  });
}

app.get('/', (_req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_req, res) => {
  countStudents(FILE_PATH).then((data) => {
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
