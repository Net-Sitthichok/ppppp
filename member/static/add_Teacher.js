function open_Dialog(){
  let dialog = document.getElementById('dialog2');
    if (dialog.style.display === 'block' || dialog.classList.contains('flex')) {
        // ถ้า dialog กำลังแสดงอยู่ให้ซ่อน
        dialog.style.display = 'none';
        dialog.classList.add('hidden');
        dialog.classList.remove('flex');
        dialog.classList.remove('opacity-100');
    } else {
        // ถ้า dialog ถูกซ่อนอยู่ให้แสดง
        dialog.style.display = 'block';
        dialog.classList.remove('hidden');
        dialog.classList.add('flex');
        dialog.classList.add('opacity-100');
    }
}
    function close_Dialog(){
      document.getElementById("dialog2").style.display='none'
      let dialog = document.getElementById("dialog2");
      dialog.classList.add("opacity-0");
      dialog.classList.add('hidden');
      dialog.classList.remove('flex');
      
    }

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