@echo off
echo Starting development servers for both projects...

:: Start the UAC development server
start "UAC Development Server" cmd /k "cd D:\P\ESHOPPING\UAC && bun dev"

:: Start the PRODUCTS development server
start "PRODUCTS Development Server" cmd /k "cd D:\P\ESHOPPING\PRODUCTS && bun dev"

echo Both development servers are now running.
echo Access UAC at: http://eshopping.local/UAC
echo Access PRODUCTS at: http://eshopping.local/PRODUCTS
echo.
echo Press any key to close this window...
pause > nul