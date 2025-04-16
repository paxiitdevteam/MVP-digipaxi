@echo off
echo Checking Python installation...
python --version >nul 2>&1
if errorlevel 1 (
    echo Python is not installed or not in PATH. Please install Python and try again.
    pause
    exit /b 1
)

echo Checking if port 8000 is available...
netstat -ano | findstr ":8000" >nul
if not errorlevel 1 (
    echo Port 8000 is already in use. Please close the application using this port or use a different port.
    pause
    exit /b 1
)

echo Starting server and opening browser...
start http://127.0.0.1:8000/index.html

echo Server is running. Press Ctrl+C to stop the server.
python -m http.server 8000 --bind 127.0.0.1

echo Server stopped.
pause 