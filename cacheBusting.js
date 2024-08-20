const fs = require('fs');

const htmlFilePath = 'dist/index.html';
const cssFilePath = 'css/style.min.css';
const jsFilePath = 'js/script.min.js';

const updateTimestamp = (filePath) => {
    const timeStamp = Date.now();
    return `${filePath}?v=${timeStamp}`;
};

let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

// CSSファイルのキャッシュバスティング
htmlContent = htmlContent.replace(/href="([^"]+\.css)"/g, `href="${updateTimestamp(cssFilePath)}"`);

// JSファイルのキャッシュバスティング
htmlContent = htmlContent.replace(/src="([^"]+\.js)"/g, `src="${updateTimestamp(jsFilePath)}"`);

// 画像ファイルのキャッシュバスティング
htmlContent = htmlContent.replace(/src="([^"]+\.(png|jpg|jpeg|gif|svg))"/g, (match, p1) => {
    return `src="${updateTimestamp(p1)}"`;
});

fs.writeFileSync(htmlFilePath, htmlContent, 'utf8');
