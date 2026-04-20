#!/bin/bash
set -e

echo "Building Weirdo DMG..."

# Ensure dependencies are installed
npm install

# Build the app using electron-builder
npm run build

echo "Build complete. DMG located in dist/"
ls -lh dist/*.dmg
