const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    // const headers = data.slice(0, data.indexOf('\n')).split(',');
    const students = data.slice(data.indexOf('\n') + 1).split('\n');
    console.log(`Number of students: ${students.length}`);
    const fields = {};
    students.forEach((student) => {
      const studentData = student.split(',');
      if (!fields[studentData[3]]) fields[studentData[3]] = [];
      fields[studentData[3]].push(studentData[0]);
    });
    for (const field in fields) {
      if (Object.hasOwnProperty.call(fields, field)) {
        const list = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
      }
    }
    resolve();
  });
});

module.exports = countStudents;
