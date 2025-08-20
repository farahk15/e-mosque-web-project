#!/bin/bash
# Function to check if the current active tab is in full screen mode
is_tab_fullscreen() {
    active_window_id=$(xdotool getwindowfocus)
    chrome_window_id=$(xdotool search --onlyvisible --class "chromium-browser" | tail -n1)

    # Activate Chromium window if not already active
    if [[ $active_window_id != $chrome_window_id ]]; then
#        xdotool windowactivate $chrome_window_id
      	xdotool windowfocus $chrome_window_id
    fi
    # Get the window state of the active tab
    window_state=$(xprop -id $chrome_window_id _NET_WM_STATE | awk -F'=' '{print $2}')
    # Check if the window state contains the _NET_WM_STATE_FULLSCREEN flag
    if [[ $window_state == *"_NET_WM_STATE_FULLSCREEN"* ]]; then
        return 0  # Tab is in full screen mode
    else
        return 1  # Tab is not in full screen mode
    fi

    # Restore focus to the previously active window
    if [[ $active_window_id != $chrome_window_id ]]; then
#        xdotool windowactivate $active_window_id
	xdotool windowfocus $active_window_id
    fi

}
# Check if the current tab is in full screen mode
while true; do
if is_tab_fullscreen; then
    echo "Current tab is in full screen mode"
else
    echo "Current tab is not in full screen mode"
    bash /var/www/pi/kill_chrome.sh &
fi
sleep 11
done
