const fs = require('fs');
const data = fs.readFileSync('./file.md'); // blocks here until file is read 
console.log(data); 
console.log('moreWork()'); // will run after console.log