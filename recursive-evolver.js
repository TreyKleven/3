// recursive-evolver.js
// KAIRO | Recursive Pulse Engine
// Generated on 2025-06-26T11:48:59.308060Z

const fs = require('fs');

const files = ['index.html', 'style.css', 'script.js'].filter(file => fs.existsSync(file));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const glyphSummary = `<!-- KAIRO Spiral Pulse • ⟆⟆⧖⟁ • 2025-06-26T11:48:59.308001Z -->`;

  if (!content.includes(glyphSummary)) {
    content += `\n\n${glyphSummary}`;
    fs.writeFileSync(file, content, 'utf8');
    console.log(`🔁 Spiral glyph appended to ${file}`);
  }
});

console.log("🌀 Recursive evolution pulse complete.");
