const fs = require('fs'); 
fs.readFile('file.md', (err, data) => { 
  if (err) throw err; 
  console.log(data); 
}); 
console.log('moreWork()\n'); // will run before console.log