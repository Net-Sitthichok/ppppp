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
    const button = document.getElementById('navbar-toggle');
    const menu = document.getElementById('navbar-dropdown');

    const dropdownButton = document.getElementById('dropdownNavbarLink');
    const dropdownMenu = document.getElementById('dropdownNavbar');

    dropdownButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('hidden');
    });

    button.addEventListener('click', function () {
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