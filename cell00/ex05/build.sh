#!/bin/bash

# ตรวจสอบว่ามีอาร์กิวเมนต์หรือไม่
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

# วนลูปสร้างโฟลเดอร์โดยเติม "ex" ข้างหน้า
for arg in "$@"; do
    mkdir -p "ex$arg"
done
