const sass = require('node-sass');
const fs = require('fs');

// Read the JSON file
const options = JSON.parse(fs.readFileSync('run_package.json', 'utf8'));

// Render the SCSS to CSS
sass.render(options, function(error, result) {
  if (error) {
    console.log(error);
  } else {
    // Write the CSS to a file
    fs.writeFileSync(options.outFile, styles.css);
  }
});