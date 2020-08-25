const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

function mainWindow(){
  let mainWindow = new BrowserWindow({
    title: 'Snake-game',
    backgroundColor: '#E8D7F1',
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (process.env.NODE_ENV !== 'production') {
    mainWindow.loadURL('http://localhost:3000')
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true
      })
    )
  }
  mainWindow.on('close',()=>{
    mainWindow = null
  })
}

app.on('ready', () => {
  mainWindow()
})