// main.js

const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');
const generateQR = require('./index.js');

let mainWindow;
let infoWindow;

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 700,
        height: 400,
        title: "LOADING..",
        icon: "./icon-image.png",
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });


    mainWindow.loadFile('index.html');
    mainWindow.setMenuBarVisibility(false);


    ipcMain.on('generateQR', (event, url) => {
        generateQR(url, (err) => {
            if (err) {
                event.reply('result', `Error: ${err.message}`);
            } else {
                openInfoWindow();
            }
        });
    });
}

function openInfoWindow() {
    infoWindow = new BrowserWindow({
        width: 300,
        height: 150,
        resizable: false,
        closable: false,
        frame: false,
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    infoWindow.loadURL(`data:text/html;charset=utf-8,
        <body style="display: flex; align-items: center; justify-content: center; font-size: 20px; background-color: white;">
            IMAGE GENERATED
        </body>`);

    setTimeout(() => {
        infoWindow.close();
        openImage();
    }, 3000);
}

function openImage() {
    const imageWindow = new BrowserWindow({
        width: 700,
        height: 400,
        title: "IMAGE GENERATED",
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    imageWindow.loadFile(path.join(__dirname, 'qr-img.png'));
}

app.whenReady().then(createMainWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
    }
});

app.on('window-all-closed', () => {
    app.quit();
});
