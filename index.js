const { app, BrowserWindow } = require("electron")

app.whenReady().then(() => {

    const myWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        webpreferences: {
            nodeIntegration: true
        }
    })
    myWindow.loadFile("index.html")
})