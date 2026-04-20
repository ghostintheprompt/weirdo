# Mic Monitor — Build Instructions

A native macOS app for monitoring microphone input levels in real time.

## Requirements

- macOS with Apple Silicon (M1/M2/M3)
- Node.js 18+ — download from https://nodejs.org if you don't have it
  - Check by opening Terminal and running: node --version

---

## Steps to build the DMG

Open **Terminal**, then run these commands one at a time:

### 1. Go into the project folder
```
cd ~/Downloads/mic-monitor
```

### 2. Install dependencies
```
npm install
```
This downloads Electron (~100MB). Takes a minute or two.

### 3. Build the DMG
```
npm run build
```
This creates the DMG file.

### 4. Find your DMG
Look in the `dist/` folder inside the project:
```
open dist/
```
You'll see **Mic Monitor-1.0.0-arm64.dmg** — double-click it to install.

---

## Installing the app

1. Double-click the DMG
2. Drag **Mic Monitor** into your Applications folder
3. First launch: right-click the app → Open (macOS will warn about unverified developer — click Open anyway)
4. When asked for microphone permission, click Allow

---

## Troubleshooting

**"App is damaged" error**
Run this in Terminal:
```
xattr -cr /Applications/Mic\ Monitor.app
```

**Mic permission denied**
Go to System Settings → Privacy & Security → Microphone → enable Mic Monitor

---

## Running without building (for testing)
```
npm start
```
