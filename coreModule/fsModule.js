const fs = require('fs');

// Read File 
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.writeFile('example.txt', 'Hello, Node!', (err) => {
    if (err) throw err;
    console.log('File Written');
});

fs.appendFile('example.txt', '\nAppended Line', (err) => {
    if (err) throw err;
    console.log('Appended Line');
});

fs.unlink('example.txt', (err) => {
    if (err) throw err;
    console.log('File deleted');
})