//ลบฟิลด์
function deleteField(fieldId, buttonclass) {
  var input = document.getElementById(fieldId);
  var dataType = input.getAttribute('data-type');
  var buttons = document.querySelectorAll('.' + buttonclass);
  console.log(fieldId)

  var xhr = new XMLHttpRequest();
  xhr.open('DELETE', '/delete_update_template_data/?data_id=' + encodeURIComponent(fieldId.split('_')[1]) + '&type=' + encodeURIComponent(dataType), true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));

  xhr.onload = function () {
    if (xhr.status === 200) {
        console.log('Response:', xhr.responseText);
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
      xhr.open('POST', '/delete_update_template_data/', true);
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
xhr.open('POST', '/addnew_template_data/', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));

xhr.onload = function () {
  if (xhr.status === 200) {
      console.log('Response:', xhr.responseText);
  } else {
      console.error('Error:', xhr.statusText);
  }
};
xhr.send('&form_id=' + encodeURIComponent(formID) + '&type=' + encodeURIComponent(type));
location.reload();
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
fetch('/addnew_template_data/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-CSRFToken': getCookie('csrftoken') 
  },
  body: `data_id=${encodeURIComponent(fieldId)}&text=${encodeURIComponent(value)}&type=${encodeURIComponent(dataType)}&form_id=${encodeURIComponent(tem_id)}`
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));

location.reload();


}

function reloadPageAfterDelay(delayInMilliseconds) {
setTimeout(function() {
    location.reload();
}, delayInMilliseconds);
}
/*
  addChildButton.addEventListener("click", function () {
    const newChildField = document.createElement("input");
    newChildField.type = "text";
    newChildField.name =
      "child_field_" + (childFieldContainer.children.length + 1);
    newChildField.placeholder =
      "Child Field " + (childFieldContainer.children.length + 1);
    childFieldContainer.appendChild(newChildField);
  });
});*/

// function set_active(tem_id, event) {
//   const checkbox = event.target;

//   fetch('/set_active/', {
//   method: 'POST',
//   headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'X-CSRFToken': getCookie('csrftoken') 
//       },
//   body: &form_id=${encodeURIComponent(tem_id)}
//   })
//   .then(response => response.json())
//   .then(data => {
//       console.log('Success:', data)
//       document.querySelectorAll('.toggle-checkbox').forEach((cb) => {
//           if (cb !== checkbox) {
//               cb.checked = false;
//           }
//       });

//       checkbox.checked = true;
      
//   })
//   .catch(error => console.error('Error:', error));    
// }