var fs = require("fs");

fs.readFile('welcome.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
 });

var data = fs.readFile('welcome.txt');
console.log(data.toString());