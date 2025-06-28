const fs = require('fs');
const path = require('path');
const terser = require('terser');
const JavaScriptObfuscator = require('javascript-obfuscator');

const distDir = path.resolve(__dirname, '../dist');

async function processFile(filePath) {
  if (!filePath.endsWith('.js')) return;

  const code = fs.readFileSync(filePath, 'utf-8');

  // Step 1: Minify with terser
  const minified = await terser.minify(code, {
    module: true,
    compress: true,
    mangle: true,
  });

  if (minified.error) {
    console.error('Terser error:', minified.error);
    return;
  }

  // Step 2: Obfuscate with javascript-obfuscator
  const obfuscated = JavaScriptObfuscator.obfuscate(minified.code, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.75,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 0.4,
    debugProtection: false,
    disableConsoleOutput: true,
    identifierNamesGenerator: 'hexadecimal',
    log: false,
    renameGlobals: false,
    rotateStringArray: true,
    selfDefending: true,
    stringArray: true,
    stringArrayEncoding: ['rc4'],
    stringArrayThreshold: 0.75,
    unicodeEscapeSequence: false,
  }).getObfuscatedCode();

  fs.writeFileSync(filePath, obfuscated, 'utf-8');
  console.log(`Obfuscated: ${filePath}`);
}

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else {
      processFile(fullPath);
    }
  });
}

walk(distDir);
