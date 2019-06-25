const fs = require('fs');

fs.readFile('./hi', { encoding: 'utf8' }, (err, data) => {
  if(err) return console.log(err);
  console.log('file read');

  fs.writeFile('hi', 'hi there', 'utf8', (err) => {
    if(err) console.log(err);
    console.log('file written');
  });
});
