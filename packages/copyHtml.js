const fs = require('fs-extra');
const path = require('path');

async function copyHtml() {
    const srcHtmlPath = path.join(__dirname, '../src/index.html');
    const distHtmlPath = path.join(__dirname, '../dist/index.html');
    
    try {
        await fs.copy(srcHtmlPath, distHtmlPath);
        console.log('HTML file copied successfully!');
    } catch (err) {
        console.error('Error copying HTML file:', err);
    }
}

copyHtml();
