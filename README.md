<div align="center">
  <img src="https://raw.githubusercontent.com/ghostintheprompt/weirdo/main/assets/icon.png" width="320" height="320" alt="Weirdo Icon">
  <h1>Weirdo</h1>
  <p><strong>A native macOS app for monitoring microphone input levels in real time.</strong></p>

  [![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
  [![Platform](https://img.shields.io/badge/platform-macOS-lightgrey.svg)]()
  [![Release](https://img.shields.io/badge/release-v1.0.0-blue.svg)](https://github.com/ghostintheprompt/weirdo/releases)
</div>

---

### Features

| Feature | Description |
| :--- | :--- |
| **Real-time Monitoring** | Visualizes microphone levels in dB and raw waveform. |
| **Peak Detection** | Tracks and displays peak levels with clipping indicators. |
| **Device Selection** | Easily switch between multiple audio input devices. |
| **Native Feel** | Minimalist macOS-inspired UI with dark mode support. |

---

### Installation

#### Download DMG
Download the latest version from the [Releases](https://github.com/ghostintheprompt/weirdo/releases) page.

#### Homebrew Cask
```bash
brew install --cask ghostintheprompt/tap/weirdo
```

#### Build from Source
```bash
git clone https://github.com/ghostintheprompt/weirdo.git
cd weirdo
npm install
npm run build
```

---

### Usage

1. Launch **Weirdo**.
2. Click **Start Monitoring** to begin capturing audio input.
3. Select your preferred input device from the dropdown menu.
4. Watch the real-time dB levels and waveform to monitor signal strength.

---

### Privacy Statement
Weirdo is **local only**. No telemetry, no tracking, and no data collection. Your audio stays on your machine.

---

<div align="center">
  Built by <strong>MDRN Corp</strong> — <a href="https://mdrn.app">mdrn.app</a>
</div>
