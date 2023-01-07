const fs = require('fs');
const sass = require('node-sass');

function renderScss(config) {
  const { file, outFile, outputStyle } = config;

  sass.render({
    file,
    outputStyle
  }, function(error, result) {
    if (error) {
      console.error(error);
      return;
    }

    fs.writeFile(outFile, result.css, function(writeError) {
      if (writeError) {
        console.error(writeError);
        return;
      }

      console.log(`SCSS compiled to ${outFile}`);
    });
  });
}

fs.readFile('run_render_to_css.json', 'utf8', function(error, data) {
  if (error) {
    console.error(error);
    return;
  }

  try {
    const config = JSON.parse(data);
    renderScss(config);
  } catch(parseError) {
    console.error(parseError);
  }
});