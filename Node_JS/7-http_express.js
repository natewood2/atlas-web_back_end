const express = require('express');
const fs = require('fs');

const app = express();

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8').toString().split('\n');
        const students = data.filter((item) => item).slice(1);
        let message = `Number of students: ${students.length}\n`;

        const fields = {};
        students.forEach((student) => {
            const field = student.split(',')[3];
            const name = student.split(',')[0];
            fields[field] = fields[field] || [];
            fields[field].push(name);
        });

        for (const field in fields) {
            message += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        }
        return message;
    } catch {
        throw new Error('Cannot load the database');
    }
}

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    try {
        const message = countStudents(process.argv[2]);
        res.send('This is the list of our students\n' + message);
    } catch (error) {
        res.send('This is the list of our students\n' + error.message);
    }
});

app.listen(1245);

module.exports = app;