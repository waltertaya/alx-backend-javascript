const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOSTNAME = 'localhost';

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    const database = process.argv[2];
    fs.readFile(database, 'utf8', (err, data) => {
      if (err) {
        res.write('This is the list of our students\n');
        res.write('Cannot load the database\n');
        res.end();
      } else {
        const lines = data.split('\n').filter((line) => line !== '');
        const students = lines.map((line) => line.split(','));
        const csStudents = students.filter((student) => student[3] === 'CS');
        const sweStudents = students.filter((student) => student[3] === 'SWE');
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${students.length}\n`);
        res.write(`Number of students in CS: ${csStudents.length}. List: ${csStudents.map((student) => student[0]).join(', ')}\n`);
        res.write(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.map((student) => student[0]).join(', ')}`);
        res.end();
      }
    });
  }
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});

module.exports = app;
