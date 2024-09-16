import fs from 'fs';

function readDatabase(filePath) {
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

          if (!studentGroups[field]) {
            studentGroups[field] = [];
          }

          const studentEntries = studentPropNames
            .map((propName, idx) => [propName, studentPropValues[idx]]);

          studentGroups[field].push(Object.fromEntries(studentEntries));
        }

        resolve(studentGroups);
      }
    });
  });
}

export default readDatabase;
