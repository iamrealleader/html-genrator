// tailwindUtils.js
"use client"

const fs = require('fs');
const path = require('path');

// Utility function to get the full Tailwind CSS content
const getFullTailwindCSS = () => {
  // Replace './path/to/tailwind.css' with the actual path to your tailwind.css file
  const tailwindCSSPath = path.resolve('./path/to/tailwind.css');
  return fs.readFileSync(tailwindCSSPath, 'utf8');
};

module.exports = {
  getFullTailwindCSS,
};
