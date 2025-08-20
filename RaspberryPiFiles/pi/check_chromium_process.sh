#!/bin/bash
while true; do
    echo $(pgrep chromium-browse)
    if pgrep chromium-browse >/dev/null; then
        echo "Chromium process is running - Status: Alive"
    else
        echo "Chromium process is not running - Status: Not Alive"
	bash /var/www/pi/kill_chrome.sh &
    fi
    sleep 15
done
