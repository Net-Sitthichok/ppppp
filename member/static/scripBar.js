document.addEventListener("DOMContentLoaded", function() {
  const avatarButton = document.getElementById('avatarButton');
  const userDropdown = document.getElementById('userDropdown');

  // เมื่อคลิกที่ avatarButton
  avatarButton.addEventListener('click', function() {
    // สลับคลาส hidden ของ userDropdown
    userDropdown.classList.toggle('hidden');
  });

  // เมื่อคลิกนอกเมนู dropdown
  window.addEventListener('click', function(event) {
    if (!avatarButton.contains(event.target) && !userDropdown.contains(event.target)) {
      // ซ่อน userDropdown ถ้าคลิกนอกเมนู dropdown
      userDropdown.classList.add('hidden');
    }
  });
});

// dropdown bar จัดการข้อมูล
document.addEventListener('DOMContentLoaded', function () {
  const buttonnav = document.getElementById('navbar-toggle');
  const menu = document.getElementById('navbar-dropdown');

  const dropdownButton = document.getElementById('dropdownNavbarLink');
  const dropdownMenu = document.getElementById('dropdownNavbar');

  dropdownButton.addEventListener('click', () => {
      dropdownMenu.classList.toggle('hidden');
  });

  buttonnav.addEventListener('click', function () {
      menu.classList.toggle('hidden');
  });
});

document.addEventListener('DOMContentLoaded', function() {
const formButton = document.getElementById('formButton');
const dropdownForm = document.getElementById('dropdownForm');

formButton.addEventListener('click', function(event) {
    event.stopPropagation();
    dropdownForm.classList.toggle('hidden');
});

// ซ่อน dropdown เมื่อคลิกที่อื่นในหน้าจอ
window.addEventListener('click', function(event) {
    if (!event.target.matches('#formButton') && !event.target.closest('#dropdownForm')) {
        if (!dropdownForm.classList.contains('hidden')) {
          dropdownForm.classList.add('hidden');
        }
    }
});
});

document.addEventListener('DOMContentLoaded', function() {
const TeacherButton = document.getElementById('manage-teacher-button');
const dropdownTeacher = document.getElementById('manage-teacher-dropdown');

TeacherButton.addEventListener('click', function(event) {
    event.stopPropagation();
    dropdownTeacher.classList.toggle('show');
});

// ซ่อน dropdown เมื่อคลิกที่อื่นในหน้าจอ
window.addEventListener('click', function(event) {
    if (!event.target.matches('#manage-teacher-button') && !event.target.closest('#manage-teacher-dropdown')) {
        if (dropdownTeacher.classList.contains('show')) {
            dropdownTeacher.classList.remove('show');
        }
    }
});
}); 