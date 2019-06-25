const copy = require('./copy');

const fs = require('fs');
const { join } = require('path');

describe('copying function', () => {
  beforeEach(done => {
    fs.writeFile(join(__dirname, './copy-me.txt'), 'Copy Me', done);
  });

  afterEach(done => {
    fs.unlink(join(__dirname, './copy-me.txt'), 'Copy Me', done);
  });

  it('copies a file from src to dest', done => {
    // src is the file we want to copy
    const src = join(__dirname, 'copy-me.txt');

    // dest is the destination of the copied file 
    const dest = join(__dirname, 'copy-me-copy.txt');

    // copy is the function that we will create 
    // it takes src and dest and does the copying
    copy(src, dest, err => {

      // if we've succeeded copying the file
      // then copy-me.txt should have the same text as copy-me-copy.txt
      fs.readFile(dest, { encoding: 'utf8' }, (err, data) => {
        // since we know copy-me.txt has "Copy Me" as its content
        // we expect copy-me-copy.txt to have "Copy Me"
        expect(data).toEqual('Copy Me');
      });
      done(err);
    });
  });

});
