const fs = require('fs');
const lines = fs.readFileSync('E:/Users/Admin/Desktop/ephphatha/app/globals.css', 'utf8').split('\n');

lines.forEach((line, i) => {
  if (line.includes('gallery') || line.includes('lightbox')) {
    console.log(`${i + 1}: ${line}`);
  }
});
