import { app, BrowserWindow, nativeTheme, ipcMain } from "electron";
import path from "path";
import os from "os";

const fs = require("fs");

ipcMain.handle("save-data", async (event, record) => {
  const folder_path = path.join(
    process.env.LOCALAPPDATA,
    "Programs",
    "LOL_app"
  );

  try {
    console.log(folder_path);

    if (!fs.existsSync(folder_path)) {
      fs.mkdirSync(folder_path);
    }
    fs.writeFileSync(path.join(folder_path, "record.txt"), record.toString());

    return "OK";
  } catch {
    return "read file error";
  }
});

ipcMain.handle("load-data", async (event) => {
  const folder_path = path.join(
    process.env.LOCALAPPDATA,
    "Programs",
    "LOL_app"
  );

  try {
    // console.log("load-data");

    const record = fs.readFileSync(
      path.join(folder_path, "record.txt"),
      "utf-8"
    );

    mainWindow.webContents.send("response", record);
    return "success";
  } catch {
    mainWindow.webContents.send("response", "read file error");
    return "read file error";
  }
});

// below code are generated automatically when setup

// needed in case process is undefined under Linux
const platform = process.platform || os.platform();

try {
  if (platform === "win32" && nativeTheme.shouldUseDarkColors === true) {
    fs.unlinkSync(path.join(app.getPath("userData"), "DevTools Extensions"));
  }
} catch (_) {}

let mainWindow;

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
