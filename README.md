<p align="center">
  <img src="assets/icon.png" width="520">
</p>

# Weirdo
The simple, pro-grade audio levels monitor for macOS. No fluff, just the levels you need. — v1.0

[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-macOS-lightgrey.svg)]()
[![Release](https://img.shields.io/badge/release-v1.0.0-blue.svg)](https://github.com/ghostintheprompt/weirdo/releases)

---

### Why use Weirdo?

Most apps just give you a jumping green bar. **Weirdo** is built for people who actually care about their audio quality—whether you're dialing in a lavalier mic for a video, setting gain on a podcast, or making sure your interface isn't distorting.

#### Works with any mic
Whether it's a high-end XLR interface, a USB condenser, or a tiny lavalier mic plugged into your jack, if macOS sees it, Weirdo can monitor it. There is no limit to how many devices you can have connected—Weirdo automatically detects every input (from 1 to 32+ channels) and lets you switch between them instantly.

#### Never clip again
Digital distortion (clipping) ruins recordings. Weirdo has a dedicated **CLIP** badge that triggers the moment your signal hits the danger zone (0 dB). The meters turn from green to amber and then red, giving you clear visual warnings before your audio gets "crunched."

#### Pro-level metering
Instead of guessing, you get real decibel (dB) numbers. It tracks your **Peak Level**—the loudest point reached—so you can find your highest volume and set your gain perfectly. Need to start over? Just hit "Reset Peak."

#### High-End Field Features
*   **Low Cut Filter (80Hz):** Instant rumble and wind noise removal. Clean up your audio before it ever hits the "disk."
*   **Gain Boost (+20dB):** Perfect for quiet mics or distant sources. Monitor and record whisper-quiet signals with crystalline clarity.
*   **Professional Naming:** Files are saved as sequential "Takes" (e.g., `WEIRDO_001.webm`, `WEIRDO_002.webm`) so you can track multiple sessions without re-typing filenames.
*   **Direct-to-Disk Recording:** Capture your audio instantly with the high-fidelity recording engine.
*   **Tally Light:** A glowing red indicator lets you know exactly when you're "on air."
*   **Precision Timer:** Tracks your recording duration down to the second.
*   **Lossless-grade quality:** Records in high-bitrate Opus (WebM) for transparent audio capture.
*   **Direct Saving:** Save your files directly to your Mac—no cloud, no temp files, just clean audio.

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
