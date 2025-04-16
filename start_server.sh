#!/bin/bash

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check if Python is installed
if ! command_exists python; then
    echo "Python is not installed. Please install Python and try again."
    exit 1
fi

# Check if port 8000 is available
if lsof -i:8000 >/dev/null 2>&1; then
    echo "Port 8000 is already in use. Please close the application using this port or use a different port."
    exit 1
fi

echo "Starting server and opening browser..."

# Try to open the browser based on the operating system
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    start http://127.0.0.1:8000/index.html 2>/dev/null
elif [[ "$OSTYPE" == "darwin"* ]]; then
    open http://127.0.0.1:8000/index.html 2>/dev/null
else
    xdg-open http://127.0.0.1:8000/index.html 2>/dev/null
fi

echo "Server is running. Press Ctrl+C to stop the server."
python -m http.server 8000 --bind 127.0.0.1

echo "Server stopped." 