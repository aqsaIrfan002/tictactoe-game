const { app, BrowserWindow, ipcMain } = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 430, 
    height: 500, 
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false 
    },
    frame: false, 
    resizable: true,
  });

  mainWindow.loadFile('index.html'); 
});

ipcMain.on("close-app", () => {
  app.quit();
});

ipcMain.on("minimize-app", () => {
  if (mainWindow) {
    mainWindow.minimize();
  }
});
