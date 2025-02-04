#!/bin/bash

# ตรวจสอบว่ามีอาร์กิวเมนต์หรือไม่
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # แสดงอาร์กิวเมนต์สูงสุด 3 ตัว
    echo "$1"
    [ -n "$2" ] && echo "$2"
    [ -n "$3" ] && echo "$3"
fi
