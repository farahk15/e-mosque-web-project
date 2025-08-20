#!/bin/bash
# Get the PID from the argument
# Kill Chromium if the process ID is valid
target="192.168.0.200"
echo "Killing Browser"
kill $(pgrep chromium-browse)
sleep 2
echo "Starting new Browser"
bash /var/www/pi/move_mouse.sh
#chromium-browser --new-window "$target"
chromium-browser  --noerrors --disable-session-crashed-bubble --disable-infobars --incognito --new-window --kiosk "$target"
