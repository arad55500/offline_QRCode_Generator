#!/bin/bash

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check if Node.js is installed; if not, install it
if ! command_exists node; then
    echo "Node.js not found. Installing..."
    curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Check if node_modules exists; if not, run npm install
if [ ! -d "node_modules" ]; then
    echo "node_modules not found. Running npm install..."
    npm install
fi

# Check if Electron is installed globally; if not, install it
if ! command_exists electron; then
    echo "Electron not found. Installing globally..."
    sudo npm install -g electron
fi

# If all checks pass, launch the Electron app
electron main.js

