$(document).ready(function() {
    let size = 16; 

    $("#changeBtn").click(function() {
        // เปลี่ยนสีพื้นหลังแบบสุ่ม
        let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        $("body").css("background-color", randomColor);

        // ทำให้ปุ่มใหญ่ขึ้นเรื่อยๆ
        size += 5;
        $(this).css("font-size", size + "px");
    });
});
