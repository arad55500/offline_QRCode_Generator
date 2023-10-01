// index.js

const fs = require('fs');
const qr = require("qr-image");

function generateQR(url, callback) {
    // Save the URL to a file
    fs.writeFile("URL.txt", url, err => {
        if (err) return callback(err);
        
        // Generate QR code and save it as an image
        var qr_png = qr.image(url, { type: 'png' });
        qr_png.pipe(fs.createWriteStream('qr-img.png'), () => {
            callback(null, 'QR code generated successfully!');
        });  
    });
}

module.exports = generateQR;
