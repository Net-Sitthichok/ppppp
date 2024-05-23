// ฟังก์ชั่นเพื่อเปิดปิด dropdown
document.addEventListener('DOMContentLoaded', function() {
    const manageButton = document.getElementById('manage-teacher-button');
    const dropdown = document.getElementById('manage-teacher-dropdown');

    manageButton.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdown.classList.toggle('show');
    });

    // ซ่อน dropdown เมื่อคลิกที่อื่นในหน้าจอ
    window.addEventListener('click', function(event) {
        if (!event.target.matches('#manage-teacher-button') && !event.target.closest('#manage-teacher-dropdown')) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        }
    });
});