const { app, BrowserWindow, Menu, shell, dialog, net } = require('electron')
const path = require('path')

const REPO = 'ghostintheprompt/weirdo'
const VERSION = app.getVersion()

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 700,
    minWidth: 480,
    minHeight: 560,
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#ffffff',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
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
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
