#!/bin/bash

# นับจำนวนไฟล์และไดเรกทอรีทั้งหมด (ไม่นับไฟล์ที่ซ่อน)
count=$(find . -maxdepth 1 ! -name ".*" | wc -l)

# แสดงผลลัพธ์
echo $count
