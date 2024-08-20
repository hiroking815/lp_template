const fs = require('fs-extra');

async function copyImages() {
    try {
        await fs.copy('src/img', 'dist/img');
        console.log('Images copied successfully!');
    } catch (err) {
        console.error('Error copying images:', err);
    }
}

copyImages();
