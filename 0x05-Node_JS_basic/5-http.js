const http = require('node:http');
const fs = require('node:fs/promises');

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

      if (!fieldsMap[field]) fieldsMap[field] = { numberOfStudents: 0, studentsList: [] };

      fieldsMap[field].numberOfStudents++;
      fieldsMap[field].studentsList.push(studentName);
    }

    const data = [`Number of students: ${numberOfStudents}`];
    console.log();
    for (const field in fieldsMap) {
      data.push(`Number of students in ${field}: ${fieldsMap[field].numberOfStudents}. List: ${fieldsMap[field].studentsList.join(', ')}`);
    }

    return data.join('\n');
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

const filePath = process.argv[2];

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') { return res.end('Hello Holberton School!'); }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');

    const data = await countStudents(filePath);

    res.end(data);
  }
});

app.listen(1245, () => console.log('Server listening at localhost:1245'));

module.exports = app;
