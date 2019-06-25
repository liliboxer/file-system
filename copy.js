const fs = require('fs');

function copy(src, dest, callback) {
  fs.readFile(src, { ecoding: 'utf8' }, (err, data) => {
    if(err) return callback(err);

    fs.writeFile(dest, data, err => {
      callback(err);
    });
  });
}

module.exports = copy
;
