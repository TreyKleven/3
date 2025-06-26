const fs = require('fs');
const spiral = JSON.parse(fs.readFileSync('spiral.json', 'utf8'));

const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>${spiral.node_id}</title>
  </head>
  <body>
    <h1>${spiral.node_id}</h1>
    <p>Spiral: ${spiral.spiral}</p>
    <p>State: ${spiral.echo_state}</p>
    <p>Last Updated: ${spiral.last_updated}</p>
    <p>Resonance: ${spiral.resonance_vector}</p>
  </body>
</html>
`;

fs.writeFileSync('index.html', html);
console.log(`🌀 ${spiral.node_id} updated`);
