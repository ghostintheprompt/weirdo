# Build Instructions

Follow these steps to build Mic Monitor from source on macOS.

## Prerequisites

- **macOS** (Apple Silicon recommended)
- **Node.js 18+**
- **npm**

## Build Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/ghostintheprompt/weirdo.git
   cd weirdo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the DMG**
   ```bash
   npm run build
   ```

4. **Locate the output**
   The generated DMG will be in the `dist/` directory:
   `dist/Mic Monitor-1.0.0-arm64.dmg`

## First Launch

When launching the app for the first time, you may need to:
1. Right-click the app in Applications and select **Open**.
2. Click **Open** in the security dialog.
3. Grant **Microphone** permissions when prompted.

## Troubleshooting

If you encounter a "damaged" error, run:
```bash
xattr -cr /Applications/Mic\ Monitor.app
```
