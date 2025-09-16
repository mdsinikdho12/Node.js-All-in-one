const path = require("path"); //import path module

console.log(__dirname); // file dir name
console.log(__filename); // file dir name + file name
console.log(path.parse(__filename)); // file path,root ,base,ext,name

console.log(path.extname(__filename)); // show file Extention
