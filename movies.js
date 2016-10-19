/**
 * Created by GUIQD on 2016-10-18.
 */
var fs = require('fs');
fs.readFile('./films.txt', 'utf8', (err, data) => {
    if (err) throw err;
    var movies = data.split('\r\n');
    console.log(movies);
});
