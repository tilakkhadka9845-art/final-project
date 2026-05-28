# Supplier Risk Analyzer - Quick Start Script

Write-Host "--- Initializing Supplier Risk Analyzer ---" -ForegroundColor Cyan

# Cleanup old processes
Write-Host "Cleaning up old processes..." -ForegroundColor Gray
try {
    $processes = Get-NetTCPConnection -LocalPort 8000, 5173 -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique
    if ($processes) { Stop-Process -Id $processes -Force -ErrorAction SilentlyContinue }
} catch {}

# 1. Start Backend in a new window
Write-Host "[1/2] Starting Node.js Backend on port 8000..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend_node; npm start"

# 2. Start Frontend in a new window
Write-Host "[2/2] Starting React Frontend on port 5173..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd frontend; npm run dev"

Write-Host "`nReady! The application will be available at http://localhost:5173" -ForegroundColor Yellow
Write-Host "Note: If you have an Anthropic API Key, please add it to backend_node/.env" -ForegroundColor Gray
