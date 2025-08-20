import subprocess

# Execute the Bash scripts concurrently
processes = []
processes.append(subprocess.Popen(['bash', '/var/www/pi/move_mouse.sh']))
processes.append(subprocess.Popen(['bash', '/var/www/pi/start_server.sh']))
processes.append(subprocess.Popen(['bash', '/var/www/pi/check_chromium_process.sh']))
processes.append(subprocess.Popen(['bash', '/var/www/pi/check_fullscreen_mode.sh']))

# Wait for all processes to complete
for process in processes:
    process.wait()

# Continue with the rest of your code
print("All processes have completed.")
