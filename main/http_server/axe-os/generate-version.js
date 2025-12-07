const fs = require('fs');
const path = require('path');

let version;
try {
    version = require('child_process').execSync('git describe --tags --always --dirty').toString().trim();
} catch (e) {
    // Fallback if not in a git repository
    version = 'ESP-Miner-Dual-Ba-V1';
}

const outputPath = path.join(__dirname, 'dist', 'axe-os', 'version.txt');
fs.writeFileSync(outputPath, version);

console.log(`Generated ${outputPath} with version ${version}`);
