const electron = require('electron')
const {app, BrowserWindow} = electron
const path = require('path')
const url = require('url')

let win;

const createWindow = () => {
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize

  win = new BrowserWindow({width, height})
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
