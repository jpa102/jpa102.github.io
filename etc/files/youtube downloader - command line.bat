@echo off
title yt-dlp downloader script v1.0

:ytdlp_ask
echo.
echo   yt-dlp is available at https://github.com/yt-dlp/yt-dlp
echo   Don't forget to check for updates, as this is crucial and attempting to download with an old build of yt-dlp can fail because the website changes
echo.
echo   You can check for updates by entering --update
echo   If you need help, run --help
echo.
echo.
echo.
echo   Enter a video URL
echo.
set /p downloadlink=">>> "
echo.

if "%downloadlink%"=="" (
	echo [error] There's no input
	pause
	cls
	goto ytdlp_ask
)

:ytdlp_main
yt-dlp %downloadlink%
echo.

echo Enter 1 to continue, 0 to stop this script.
choice /C:10 /N

if %errorlevel%==1 (
	cls
	goto ytdlp_ask
)
if %errorlevel%==2 exit /b 0
