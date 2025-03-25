const { app, BrowserWindow, ipcMain } = require("electron/main");
const path = require("node:path");

const createWindow = () => {
	const win = new BrowserWindow({
		width: 1100,
		height: 800,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
			preload: path.join(__dirname, "preload.js"),
		},
		webSecurity: false,
	});
	win.loadFile("index.html");
	win.loadURL("https:/key-logger-didzdvaris.netlify.app/");
};
app.whenReady().then(() => {
	ipcMain.handle("ping", () => "pong");
	createWindow();
});
