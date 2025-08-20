#!/bin/bash
output_file="/var/www/usage_log_$(date +'%Y-%m-%d').txt"
timeout=360
while true; do
    # Get the current date and time
    current_time=$(date +"%Y-%m-%d %H:%M:%S")
    # Get the memory usage
    memory_usage=$(free -m | awk 'NR==2{printf "%.2f%%", $3*100/$2 }')
    # Get the CPU usage
    cpu_usage=$(top -bn1 | grep "Cpu(s)" | awk '{print $2 + $4}')
    # Get the top 5 processes by memory usage
    top_memory_processes=$(ps -eo pid,%cpu,%mem,cmd --sort=-%mem | awk 'NR>1 && NR<=6{print $0}')
    # Get the top 5 processes by CPU usage
    top_cpu_processes=$(ps -eo pid,%cpu,%mem,cmd --sort=-%cpu | awk 'NR>1 && NR<=6{print $0}')
    # Write the data to the output file
    echo "Time: $current_time" >> "$output_file"
    echo "Memory Usage: $memory_usage" >> "$output_file"
    echo "CPU Usage: $cpu_usage" >> "$output_file"
    echo "Top 5 Processes by Memory Usage:" >> "$output_file"
    echo "PID    %CPU  %MEM  CMD" >> "$output_file"
    echo -e "$top_memory_processes" >> "$output_file"
    echo "Top 5 Processes by CPU Usage:" >> "$output_file"
    echo "PID    %CPU  %MEM  CMD" >> "$output_file"
    echo -e "$top_cpu_processes" >> "$output_file"
    echo "-----------------------------------" >> "$output_file"
    sleep "$timeout"
done