const http = require('http');
const fs = require('fs');

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

        resolve(studentsData);
      }
    });
  });
}

const filePath = process.argv[2];

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') { return res.end('Hello Holberton School!'); }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');

    countStudents(filePath).then((data) => {
      res.end(data.join('\n'));
    }).catch(() => res.send('This is the list of our students\nCannot load the database'));
  }
});

app.listen(1245, () => console.log('Server listening at localhost:1245'));

module.exports = app;
