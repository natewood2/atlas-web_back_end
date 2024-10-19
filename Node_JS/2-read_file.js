const fs = require('fs');

function countStudents(path) {
    try {
        const students = fs.readFileSync(path, 'utf-8');
        const lines = students.split('\n').filter(line => line.trim() !== '');
        lines.shift();

        if (lines.length === 0) {
            throw new Error('Not valid students or CSV');
        }

        const studentFields = {};

        lines.forEach((line) => {
            const [firstname, , , field] = line.split(',');
            if (!studentFields[field]) {
                studentFields[field] = [];
            }
            studentFields[field].push(firstname);
        });

        console.log(`Number of students: ${lines.length}`);

        for (const [field, students] of Object.entries(studentFields)) {
            console.log(
                `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`
            );
        }
    } catch (err) {
        throw new Error('Cannot load the database/csv');
    }
}

module.exports = countStudents;
