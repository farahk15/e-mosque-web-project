#!/bin/bash
# Path to the background image

background_image="/var/www/pi/eMosque_wallpaper.png"
path=$(echo $DBUS_SESSION_BUS_ADDRESS)
export DBUS_SESSION_BUS_ADDRESS=unix:path=/run/user/1000/bus
# Set the background image
xfconf-query --channel xfce4-desktop --property /backdrop/screen0/monitor0/image-path --set "$background_image"
