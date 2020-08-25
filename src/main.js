const { BrowserWindow, app } = require('electron')

const createWindow = () => {
  new BrowserWindow({
    title: 'snake game',

    webPreferences: {
      nodeIntegration: true
    }
  }).loadFile('./windows/Game/index.js')
}

app.on('ready', createWindow)