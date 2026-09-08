@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js 22.13.0 or newer is required. Install it, then reopen this file.
  pause
  exit /b 1
)
node -e "const [major, minor] = process.versions.node.split('.').map(Number); process.exit(major < 22 || (major === 22 && minor < 13) ? 1 : 0)"
if errorlevel 1 (
  echo Please update Node.js to 22.13.0 or newer, then reopen this file.
  pause
  exit /b 1
)
if not exist "node_modules\.bin\vite.cmd" (
  echo Installing the locked project dependencies. This is needed once.
  call npm ci
  if errorlevel 1 (
    echo Dependency installation failed. Keep this window open to read the error.
    pause
    exit /b 1
  )
)
echo Open http://localhost:5173/ after Vite reports that the server is ready.
echo CIEN v0.5 - all pages are available from the navigation.
echo Keep this window open while reviewing the site. Press Ctrl+C to stop.
call npm run dev
if errorlevel 1 pause
