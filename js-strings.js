const csv = require('csv-parser');
const fs = require('fs');
const results = [];

fs.createReadStream('data.csv')
.pipe(csv())
.on('data', (data) => {
    results.push(data);
    console.log(data);
})
.on('end', () => {
    console.log(results);
});