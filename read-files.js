const fs = require('fs');
fs.readFile('./hi', { encoding: 'utf8' }, (err, data) => {
  if(err) {
    console.error(err);
  }
  console.log(data);
});

fs.writeFile('bye', 'bye.txt', 'utf8', (err) => {
  if(err) throw err;
  fs.readFile('./bye', { encoding: 'utf8' }, (err, data) => {
    if(err) throw err;
    console.log(data);

    fs.unklink('./bye', err => {
      console.log(err);
    });
  });
  console.log('File has been saved');
});


