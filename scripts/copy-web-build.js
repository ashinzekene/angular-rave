const fs = require('fs');
const path = require('path');

const srcPath = path.resolve(__dirname, '..', 'dist', 'angular-rave-lib');
const destPath = path.resolve(__dirname, '..', 'docs');

const srcFolderExists = fs.existsSync(srcPath);
const destFolderExists = fs.existsSync(destPath);

let files
if (srcFolderExists) {
  files = fs.readdirSync(srcPath);

  if (!destFolderExists) {
    fs.mkdirSync(destPath)
  }
  
  files.map(file => {
    const from = path.resolve(srcPath, file);
    const toPath = path.resolve(__dirname, '..', 'docs', file);

    fs.copyFileSync(from, toPath)
  })
} else {
  console.log('No build files to move')
}

console.log('Moving website build files to docs complete')