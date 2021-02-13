const { app, BrowserWindow } = require('electron')

var ipc = require('electron').ipcMain

ipc.on('invokeAction', function(event, data) {
    var result = playTrack(data)
    event.sender.send('actionReply', result)
})

function playTrack() {
    console.log("play")

}

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})