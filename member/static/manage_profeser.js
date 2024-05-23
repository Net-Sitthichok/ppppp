// Function to open modal
function openModal(modalId, userId, username, prefix, fname, lname, email) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";

    // Fill form data for edit
    if (username && modalId === 'editModal') {
        console.log(prefix)
        document.getElementById('editUserId').value = userId;
        document.getElementById('prefix').value = prefix;
        document.getElementById('editUsername').value = username;
        document.getElementById('editFirstName').value = fname;
        document.getElementById('editLastName').value = lname;
        document.getElementById('editEmail').value = email;
    } else if (modalId === 'deleteModal') {
        document.getElementById('deleteUserId').value = userId;
    }
}

// Close modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

//   // ฟังก์ชั่นเพื่อเปิดปิด dropdown
//   const theacherdropdown = document.getElementById('manage-teacher-dropdown');
//   // รับอ้างอิงไปยัง element ของปุ่มหรืออื่นๆ ที่ใช้ในการเปิด/ปิด dropdown
//   const teacherButton = document.getElementById('manage-teacher-button'); // สมมติว่ามีปุ่มที่ใช้ในการเปิด/ปิด dropdown 
//   // เพิ่ม event listener เมื่อคลิกที่ปุ่มเพื่อเปิด/ปิด dropdown
//   teacherButton.addEventListener('click', function() {
//           // ถ้า dropdown ไม่มี class "hidden" ให้เพิ่ม class "hidden" เข้าไป
//       if (!theacherdropdown.classList.contains('hidden')) {
//         theacherdropdown.classList.add('hidden');
//       } else {
//           // ถ้า dropdown มี class "hidden" ให้ลบ class "hidden" ออก
//           theacherdropdown.classList.remove('hidden');
//           }
//   });