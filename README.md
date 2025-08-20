## Device Configuration

### Device Credentials
- **Username**: `emosque`
- **Password**: `bahbish!@#$`


### WiFi Service
- **SSID**: `Emosque`
- **Password**: `bahbish!@#$`

The device is assigned the IP address `192.168.0.200`, which is unreachable without connecting to its LAN.


### FTP Service
- **Username**: `emosque`
- **Password**: `bahbish!@#$`
- **Connection Command**: `ftp ftp://emosque:bahbish!@#$@192.168.0.200`
- **GUI Tool**: Use FileZilla for a graphical interface.


### SSH Service
- **Username**: `emosque`
- **Password**: `bahbish!@#$`
- **Connection Command**: `ssh emosque@192.168.0.200`


### File Locations
#### The files in `RaspberryPiFiles/pi`:
- **pi**: `/var/www/pi`


#### The files in `RaspberryPiFiles/config`:
- **autostart**: `/etc/xdg/lxsession/LXDE-pi/autostart`
- **hostapd.conf**: `/etc/hostapd/hostapd.conf`
- **ligttpd.conf**: `/etc/lighttpd/lighttpd.conf`


### TS files
Compile the TS files with `npx tsc` or `tsc` depending on your system before running the server 

### To stop the services running automatically
Replace the autostart file with the autostart_noEmosque version, and change its name to autostart

### To write the image file on an SD card
#### Linux:

##### Identify the card's name wiht `lsblk`
##### Use `sudo dd if=/dev/sdX of=image bs=4M status=progress`, where sdX is the name of the sd card from the earlier command

