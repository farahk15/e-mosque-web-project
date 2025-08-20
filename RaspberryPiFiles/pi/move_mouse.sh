#!/bin/bash
# Get the screen dimensions
SCREEN_WIDTH=$(xdpyinfo | awk '/dimensions:/ {print $2}' | cut -d 'x' -f 1)
SCREEN_HEIGHT=$(xdpyinfo | awk '/dimensions:/ {print $2}' | cut -d 'x' -f 2)
# Calculate the coordinates for the bottom right corner
MOUSE_X=$((SCREEN_WIDTH - 1))
MOUSE_Y=$((SCREEN_HEIGHT - 1))
# Move the mouse cursor to the bottom right corner
xdotool mousemove $MOUSE_X $MOUSE_Y
