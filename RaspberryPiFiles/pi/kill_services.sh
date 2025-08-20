#!/bin/bash

# Processes to kill (excluding sound-related processes)
echo "STARTING"
processes_to_kill=(
#    pcmanfm
#    lxpanel
)
# Kill processes
echo "STARTING 2 "
for process in "${processes_to_kill[@]}"; do
    echo "STARTING 3 "
    sudo /usr/bin/pkill -f "$process"
done
echo "Processes have been terminated."
