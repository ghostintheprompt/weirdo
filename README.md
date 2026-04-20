<div align="center">
  <img src="https://raw.githubusercontent.com/ghostintheprompt/weirdo/main/assets/icon.png" width="320" height="320" alt="Weirdo Icon">
  <h1>Weirdo</h1>
  <p><strong>The simple, pro-grade mic monitor for macOS. No fluff, just the levels you need.</strong></p>

  [![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
  [![Platform](https://img.shields.io/badge/platform-macOS-lightgrey.svg)]()
  [![Release](https://img.shields.io/badge/release-v1.0.0-blue.svg)](https://github.com/ghostintheprompt/weirdo/releases)
</div>

---

### Why use Weirdo?

Most apps just give you a jumping green bar. **Weirdo** is built for people who actually care about their audio quality—whether you're dialing in a lavalier mic for a video, setting gain on a podcast, or making sure your interface isn't distorting.

#### 🎙 Works with any mic
Whether it's a high-end XLR interface, a USB condenser, or a tiny lavalier mic plugged into your jack, if macOS sees it, Weirdo can monitor it. You can switch between devices instantly right in the app.

#### ⚠️ Never clip again
Digital distortion (clipping) ruins recordings. Weirdo has a dedicated **CLIP** badge that triggers the moment your signal hits the danger zone (0 dB). The meters turn from green to amber and then red, giving you clear visual warnings before your audio gets "crunched."

#### 📈 Pro-level metering
Instead of guessing, you get real decibel (dB) numbers. It tracks your **Peak Level**—the loudest point reached—so you can find your highest volume and set your gain perfectly. Need to start over? Just hit "Reset Peak."

#### 🌊 See your sound
A live waveform (oscilloscope) shows you the actual shape of your audio signal. It helps you spot background hum, consistency issues, or if your signal is "flat-topping" (clipping) visually.

---

### Installation

#### Download DMG
The easiest way is to download the latest version from the [Releases](https://github.com/ghostintheprompt/weirdo/releases) page.

#### Build from Source
If you prefer to build it yourself:
```bash
git clone https://github.com/ghostintheprompt/weirdo.git
cd weirdo
npm install
npm run build
```

---

### Privacy & Speed
*   **Local Only:** Weirdo never listens to you. It doesn't send audio to the cloud, has zero telemetry, and no tracking.
*   **Fast & Light:** Built with native macOS technologies for near-zero lag visual feedback.

---

<div align="center">
  Built by <strong>MDRN Corp</strong> — <a href="https://mdrn.app">mdrn.app</a>
</div>
