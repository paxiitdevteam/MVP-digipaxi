@echo off
echo PAXIIT Development Server (Safe Mode)
echo ===================================
echo.

REM Check if Python is available (for fallback)
python --version >nul 2>&1
if not errorlevel 1 (
    echo Python is available as fallback.
) else (
    echo Warning: Python not found. Some features may not work.
)

REM Check if Node.js is available
node --version >nul 2>&1
if errorlevel 1 (
    echo Node.js is not installed. Using Python server instead.
    echo.
    echo Starting Python server on port 3000...
    start http://127.0.0.1:3000/dev-test.html
    python -m http.server 3000 --bind 127.0.0.1
    goto :end
)

REM Check if npm is available
npm --version >nul 2>&1
if errorlevel 1 (
    echo npm is not installed. Using Python server instead.
    echo.
    echo Starting Python server on port 3000...
    start http://127.0.0.1:3000/dev-test.html
    python -m http.server 3000 --bind 127.0.0.1
    goto :end
)

REM Check if package.json exists
if not exist package.json (
    echo Creating minimal package.json...
    echo { "name": "paxiit-dev", "version": "1.0.0", "scripts": { "start": "npx http-server -p 3000 -c-1" } } > package.json
)

REM Install http-server if needed
echo Installing http-server (if needed)...
call npx http-server --version >nul 2>&1
if errorlevel 1 (
    echo Installing http-server...
    call npm install -g http-server
)

REM Try to use Python server by default (most reliable based on your setup)
echo.
echo Starting Python development server on port 3000...
echo This server will automatically reload when you save changes.
echo Press Ctrl+C to stop the server.
echo.
start http://127.0.0.1:3000/dev-test.html

REM Start the Python server with no caching
python -m http.server 3000 --bind 127.0.0.1

:end
echo.
echo Server stopped.
pause 