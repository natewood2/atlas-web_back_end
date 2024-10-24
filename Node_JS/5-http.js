const http = require('http');
const fs = require('fs');

const app = http.createServer(function(req, res) {
    if (req.url === '/') {
        res.write('Hello Holberton School!');
        res.end();
    }

    if (req.url === '/students') {
        res.write('This is the list of our students\n');

        try {
            let file = fs.readFileSync(process.argv[2], 'utf8');
            
            let lines = file.split('\n').filter(line => line.length > 0);
            
            lines = lines.slice(1);
            
            // let total = lines.length;
            let total = lines.length;
            res.write(`Number of students: ${total}\n`);
            
            let fields = {};
            for (let i = 0; i < lines.length; i++) {
                let student = lines[i].split(',');
                let field = student[3];
                let name = student[0];
                
                if (!fields[field]) {
                    fields[field] = [];
                }
                fields[field].push(name);
            }
            
            for (let field in fields) {
                let students = fields[field];
                res.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`);
            }
        } catch (error) {
            res.write('Cannot load the database');
        }
        
        res.end();
    }
});

app.listen(1245);

module.exports = app;