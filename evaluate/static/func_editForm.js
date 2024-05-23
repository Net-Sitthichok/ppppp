function checkHandle(checkboxId, parentId) {
    var checkbox = document.getElementById(checkboxId);
    var parentCheckbox = document.getElementById('item_' + parentId);
  
    // เมื่อ checkbox ลูกถูกเลือก, ให้เลือก checkbox แม่ด้วย
    if (checkbox.checked) {
      parentCheckbox.checked = true;
    }
  
    // ตรวจสอบว่าควรจะยกเลิกการเลือก checkbox แม่หรือไม่ (ถ้าลูกทั้งหมดไม่ถูกเลือก)
    else {
      var allSiblingsChecked = document.querySelectorAll(`input[data-parent-id="${parentId}"]:checked`).length > 0;
      if (!allSiblingsChecked) {
        parentCheckbox.checked = false;
      }
    }
  }

  function handleParentCheckbox(parentId) {
    var parentCheckbox = document.getElementById('item_' + parentId);
    var childCheckboxes = document.querySelectorAll(`input[data-parent-id="${parentId}"]`);
  
    // ตั้งค่า checkbox ลูกทั้งหมดให้มีสถานะเดียวกันกับ checkbox แม่
    childCheckboxes.forEach(function(checkbox) {
      checkbox.checked = parentCheckbox.checked;
    });
  }
  

//ลบฟิลด์
function deleteField(fieldId, buttonclass) {
  var input = document.getElementById(fieldId);
  var dataType = input.getAttribute('data-type');
  var buttons = document.querySelectorAll('.' + buttonclass);
  console.log(fieldId)

  var xhr = new XMLHttpRequest();
  xhr.open('DELETE', '/API_updates_delete_form/?data_id=' + encodeURIComponent(fieldId.split('_')[1]) + '&type=' + encodeURIComponent(dataType), true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));

  xhr.onload = function () {
    if (xhr.status === 200) {
        console.log('Response:', xhr.responseText);
        location.reload();
    } else {
        console.error('Error:', xhr.statusText);
    }
  };
  xhr.send();

  var parts = fieldId.split('_');
  input.remove();
  console.log(parts[0])
  if (parts[0] == "parent") {
    reloadPageAfterDelay(200) //ถ้าลบฟิลด์แม่ให้โหลดหน้าจอใหม่
  }
  buttons.forEach(function(button) {
    button.remove();
  });

}

//แก้ไขฟิลด์ทั้งหมด
function editField(fieldId) {
  var input = document.getElementById(fieldId);
  console.log(input)
  input.removeAttribute('readonly');
  input.focus();

  input.onblur = function() {
      var value = input.value;  
      var dataType = input.getAttribute('data-type');
      input.setAttribute('readonly', true);

      // สร้าง XMLHttpRequest
      var xhr = new XMLHttpRequest();
      xhr.open('POST', '/API_updates_delete_form/', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.setRequestHeader('X-CSRFToken', getCookie('csrftoken')); // รับ CSRF token

      xhr.onload = function () {
          if (xhr.status === 200) {
              console.log('Response:', xhr.responseText);
          } else {
              console.error('Error:', xhr.statusText);
          }
      };

      xhr.send('data_id=' + encodeURIComponent(fieldId.split('_')[1]) + '&text=' + encodeURIComponent(value) + '&type=' + encodeURIComponent(dataType));
  };
}//ลองแบบ XML

//  cookie
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

//สร้าง ฟิลด์แม่ใหม่
function saveNewParent(type, formID) {

var xhr = new XMLHttpRequest();
xhr.open('POST', '/addnew_form_data/', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));

xhr.onload = function () {
  if (xhr.status === 200) {
      location.reload();
      console.log('Response:', xhr.responseText);
  } else {
      console.error('Error:', xhr.statusText);
  }
};
xhr.send('&form_id=' + encodeURIComponent(formID) + '&type=' + encodeURIComponent(type));
}

//เพิ่มฟิลด์ลูก
function addField(parentId, dataType, tem_id) {
// Check if parentId is provided, adjust the container accordingly
const containerId = parentId ? `child-container_${parentId}` : 'PLO';
const container = document.getElementById(containerId);
const newFieldId = new Date().getTime(); // Unique ID for new field

const div = document.createElement('div');
//div.style.marginLeft = parentId ? '20px' : '';
div.innerHTML = `
    <input type="text" id="child_parentID_${parentId}" name="child_parentID_${parentId}" value=""  data-type="${dataType}" required> 
    <button type="button" onclick="editField('new_${parentId}')">Edit</button>
`;

container.appendChild(div);
const input = div.querySelector('input');
input.setAttribute('placeholder',"กรุณาใส่หัวข้อประเด็นรอง")
input.onblur = function() {
  input.setAttribute('readonly', true);
  console.log(input.id.split('_')[2])
  saveFieldData(input.id, input.value, dataType, tem_id);
};
}

//แบบ fetch ธรรมดา
function saveFieldData(fieldId, value, dataType, tem_id) {
fetch('/addnew_form_data/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-CSRFToken': getCookie('csrftoken') 
  },
  body: `data_id=${encodeURIComponent(fieldId)}&text=${encodeURIComponent(value)}&type=${encodeURIComponent(dataType)}&form_id=${encodeURIComponent(tem_id)}`
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.then(  location.reload())
.catch(error => console.error('Error:', error));
}

function reloadPageAfterDelay(delayInMilliseconds) {
setTimeout(function() {
    location.reload();
}, delayInMilliseconds);
}

document.addEventListener('DOMContentLoaded', function() {// Function to save form data to localStorage
const formElement = document.getElementById('editForm');
const formFields = formElement.querySelectorAll('input, select, textarea');

// Function to save form data to localStorage
const saveFormData = () => {
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());
    localStorage.setItem('formData', JSON.stringify(data));
};

// Function to load form data from localStorage
const loadFormData = () => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
        Object.keys(savedData).forEach(key => {
            const field = formElement.querySelector(`[name="${key}"]`);
            if (field) {
                field.value = savedData[key];
            }
        });
    }
};

// Save form data on input change
formFields.forEach(field => {
    field.addEventListener('input', saveFormData);
});

// Load form data on page load
loadFormData();
});