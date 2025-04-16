@echo off
echo Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo Node.js is not installed. Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Checking npm installation...
npm --version >nul 2>&1
if errorlevel 1 (
    echo npm is not installed. Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Installing dependencies...
call npm install

echo Starting development server...
start http://127.0.0.1:8000

echo Running in development mode...
call npm run dev

echo Development server stopped.
pause 