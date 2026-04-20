const { app, BrowserWindow, Menu, shell, dialog, net, ipcMain } = require('electron')
const path = require('path')
const fs = require('fs')

const REPO = 'ghostintheprompt/weirdo'
const VERSION = app.getVersion()

function createWindow() {
  const win = new BrowserWindow({
    width: 640,
    height: 800,
    minWidth: 480,
    minHeight: 600,
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#0a0a0a',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, 'assets', 'icon.png'),
  })

  win.loadFile('index.html')
  setupMenu()
  
  // Update check on launch (3s delay)
  setTimeout(() => {
    checkForUpdates(true)
  }, 3000)
}

ipcMain.handle('get-downloads-path', () => app.getPath('downloads'))

ipcMain.handle('save-recording', async (event, arrayBuffer, fileName) => {
  const { filePath } = await dialog.showSaveDialog({
    title: 'Save Recording',
    defaultPath: path.join(app.getPath('downloads'), fileName),
    filters: [
      { name: 'Audio', extensions: ['webm', 'opus', 'wav'] }
    ]
  })

  if (filePath) {
    fs.writeFileSync(filePath, Buffer.from(arrayBuffer))
    return filePath
  }
  return null
})

function setupMenu() {
  const template = [
    {
      label: app.name,
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        {
          label: 'Check for Updates...',
          click: () => checkForUpdates(false)
        },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    },
    { role: 'editMenu' },
    { role: 'viewMenu' },
    { role: 'windowMenu' },
    {
      role: 'help',
      submenu: [
        {
          label: 'GitHub Repository',
          click: () => shell.openExternal(`https://github.com/${REPO}`)
        }
      ]
    }
  ]
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

function checkForUpdates(silent) {
  const request = net.request(`https://api.github.com/repos/${REPO}/releases/latest`)
  request.on('response', (response) => {
    let body = ''
    response.on('data', (chunk) => { body += chunk })
    response.on('end', () => {
      try {
        const data = JSON.parse(body)
        const latestVersion = data.tag_name.replace('v', '')
        if (latestVersion !== VERSION) {
          dialog.showMessageBox({
            type: 'info',
            title: 'Update Available',
            message: `A new version (${data.tag_name}) is available.`,
            detail: 'Would you like to download it now?',
            buttons: ['Download', 'Later'],
            defaultId: 0
          }).then(({ response }) => {
            if (response === 0) {
              shell.openExternal(`https://github.com/${REPO}/releases/latest`)
            }
          })
        } else if (!silent) {
          dialog.showMessageBox({
            type: 'info',
            title: 'No Updates',
            message: 'You are running the latest version.',
            buttons: ['OK']
          })
        }
      } catch (e) {
        if (!silent) console.error('Update check failed', e)
      }
    })
  })
  request.on('error', (err) => {
    if (!silent) console.error('Update check error', err)
  })
  request.end()
}

app.whenReady().then(() => {
  if (process.platform === 'darwin') {
    app.setAboutPanelOptions({
      applicationName: 'Weirdo',
      applicationVersion: VERSION,
      copyright: 'Built by MDRN Corp',
      credits: 'mdrn.app',
      website: 'https://mdrn.app',
      iconPath: path.join(__dirname, 'assets', 'icon.png'),
    })
  }
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
