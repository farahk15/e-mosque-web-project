#!/bin/bash
# Disable screen blanking and power management
xset s off
xset -dpms
# Run the script in an endless loop to keep the settings applied
while true; do
    sleep 60  # Adjust the sleep duration as needed
done
