import { app, BrowserWindow, nativeTheme, ipcMain } from "electron";
import path from "path";
import os from "os";

// import { app } from '@electron/remote'

// const filePath = path.join(app.getPath("userData"), "/some.file");
// console.log(filePath);
// console.log(1235);

ipcMain.handle("save-data", async (event, record) => {
  try {
    console.log(record);
  } catch {
    return "read file error";
  }
});

// below code are generated automatically when setup

// // needed in case process is undefined under Linux
// const platform = process.platform || os.platform();

// try {
//   if (platform === "win32" && nativeTheme.shouldUseDarkColors === true) {
//     require("fs").unlinkSync(
//       path.join(app.getPath("userData"), "DevTools Extensions")
//     );
//   }
// } catch (_) {}

let mainWindow;

console.log("main.js", __dirname);

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, "icons/icon.png"), // tray icon
    width: 1000,
    height: 600,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      // More info: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD),
    },
  });

  mainWindow.loadURL(process.env.APP_URL);

  if (process.env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    mainWindow.webContents.openDevTools();
  } else {
    // we're on production; no access to devtools pls
    mainWindow.webContents.on("devtools-opened", () => {
      mainWindow.webContents.closeDevTools();
    });
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
