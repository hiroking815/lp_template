const fs = require('fs');
const path = require('path');

const htmlFilePath = 'dist/index.html';
const cssFilePath = 'dist/css/style.min.css';
const jsFilePath = 'dist/js/script.min.js';

const updateTimestamp = (filePath) => {
    const timeStamp = Date.now();
    return `${filePath}?v=${timeStamp}`;
};

let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
htmlContent = htmlContent.replace(/href="([^"]+\.css)"/, `href="${updateTimestamp(cssFilePath)}"`);
htmlContent = htmlContent.replace(/src="([^"]+\.js)"/, `src="${updateTimestamp(jsFilePath)}"`);

fs.writeFileSync(htmlFilePath, htmlContent, 'utf8');