const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 854,
    height: 480,
    frame: false,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      // nodeIntegration: false,
      // contextIsolation: false,
    },
  });

  ipcMain.handle("minimize", () => {
    win.minimize();
  });

  ipcMain.handle("close", () => {
    win.close();
  });

  const url = "https://typeline-client.vercel.app";

  // const url = isDev
  // ? 'http://localhost:8000'
  // : format({
  //     pathname: join(__dirname, '../renderer/out/index.html'),
  //     protocol: 'file:',
  //     slashes: true,
  //   })

  win.loadURL(url);
}

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.allowRendererProcessReuse = true;
