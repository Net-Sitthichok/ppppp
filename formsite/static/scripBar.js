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



// // dropdown bar จัดการข้อมูล
// document.addEventListener('DOMContentLoaded', function () {
//     const button = document.getElementById('navbar-toggle');
//     const menu = document.getElementById('navbar-dropdown');

//     const dropdownButton = document.getElementById('dropdownNavbarLink');
//     const dropdownMenu = document.getElementById('dropdownNavbar');

//     dropdownButton.addEventListener('click', () => {
//         dropdownMenu.classList.toggle('hidden');
//     });

//     button.addEventListener('click', function () {
//         menu.classList.toggle('hidden');
//     });
//     });


// const dropdown = document.getElementById('userDropdown');
// // รับอ้างอิงไปยัง element ของปุ่มหรืออื่นๆ ที่ใช้ในการเปิด/ปิด dropdown
// const toggleButton = document.getElementById('avatarButton'); // สมมติว่ามีปุ่มที่ใช้ในการเปิด/ปิด dropdown 
// // เพิ่ม event listener เมื่อคลิกที่ปุ่มเพื่อเปิด/ปิด dropdown
// toggleButton.addEventListener('click', function() {
//         // ถ้า dropdown ไม่มี class "hidden" ให้เพิ่ม class "hidden" เข้าไป
//     if (!dropdown.classList.contains('hidden')) {
//         dropdown.classList.add('hidden');
//     } else {
//         // ถ้า dropdown มี class "hidden" ให้ลบ class "hidden" ออก
//         dropdown.classList.remove('hidden');
//         }
// });






    
// script สำหรับ 3 ปุ่มใน action

// document.addEventListener('DOMContentLoaded', function() {
//     // เลือกทุกปุ่ม "manage-teacher-button"
//     const manageTeacherButtons = document.querySelectorAll('#manage-teacher-button');

//     // ลูปผ่านทุกปุ่ม
//     manageTeacherButtons.forEach(function(button) {
//         // เพิ่ม event listener สำหรับปุ่มแต่ละปุ่ม
//         button.addEventListener('click', function(event) {
//             // หาตัวอ้างอิงของ dropdown ของแถวนี้
//             const dropdown = button.nextElementSibling;

//             // ทำการ toggle class 'show' เพื่อเปิดหรือปิด dropdown
//             dropdown.classList.toggle('show');
//         });
//     });

//     // ซ่อน dropdown เมื่อคลิกที่พื้นหลังหรือที่อื่นในหน้าจอ
//     window.addEventListener('click', function(event) {
//         // ตรวจสอบว่าคลิกไปที่ dropdown หรือไม่
//         if (!event.target.matches('#manage-teacher-button')) {
//             // หาทุก dropdowns และซ่อนทั้งหมด
//             const dropdowns = document.querySelectorAll('.dropdown-content');
//             dropdowns.forEach(function(dropdown) {
//                 dropdown.classList.remove('show');
//             });
//         }
//     });
// });

    
