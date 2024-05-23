function showDialog(){
    let dialog = document.getElementById('dialog');
    dialog.classList.remove('hidden');
    dialog.classList.add('flex');
    dialog.classList.add('opacity-100');
  }
    function hidedialog(){
      let dialog = document.getElementById("dialog");
      dialog.classList.add("opacity-0");
      dialog.classList.add('hidden');
      dialog.classList.remove('flex');
    
    }

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