#!/bin/bash
INTERFACES_FILE="/etc/network/interfaces"
COMMENT_MARKER="#"
function enable_internet() {
    sudo sed -i "/^$COMMENT_MARKERauto wlan0/s/^$COMMENT_MARKER//" $INTERFACES_FILE
    sudo sed -i "/^$COMMENT_MARKERallow-hotplug wlan0/s/^$COMMENT_MARKER//" $INTERFACES_FILE
    sudo sed -i "/^$COMMENT_MARKERiface wlan0 inet dhcp/s/^$COMMENT_MARKER//" $INTERFACES_FILE
    sudo systemctl restart networking
    echo "Internet enabled."
}
function disable_internet() {
    sudo sed -i "/^auto wlan0/s/^/$COMMENT_MARKER/" $INTERFACES_FILE
    sudo sed -i "/^allow-hotplug wlan0/s/^/$COMMENT_MARKER/" $INTERFACES_FILE
    sudo sed -i "/^iface wlan0 inet dhcp/s/^/$COMMENT_MARKER/" $INTERFACES_FILE
    sudo systemctl restart networking
    echo "Internet disabled."
}
case "$1" in
    "on")
        enable_internet
        ;;
    "off")
        disable_internet
        ;;
    *)
        echo "Usage: ./toggle_internet.sh [on|off]"
        exit 1
        ;;
esac
