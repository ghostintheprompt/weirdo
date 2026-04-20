const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  saveRecording: (arrayBuffer, fileName) => ipcRenderer.invoke('save-recording', arrayBuffer, fileName),
  getDownloadsPath: () => ipcRenderer.invoke('get-downloads-path')
})
