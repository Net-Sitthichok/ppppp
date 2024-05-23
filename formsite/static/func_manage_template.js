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

function set_active(tem_id) {
    fetch('/set_active/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': getCookie('csrftoken') 
        },
    body: `&form_id=${encodeURIComponent(tem_id)}`
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
      
    //location.reload();    
}
    // {% comment %} function viewForm(formId) {
    //     alert("Viewing details for Form ID: " + formId);
    // } {% endcomment %}

    function set_active(tem_id, event) {
        const checkbox = event.target;
    
        fetch('/set_active/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-CSRFToken': getCookie('csrftoken') 
            },
        body: `&form_id=${encodeURIComponent(tem_id)}`
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data)
            document.querySelectorAll('.toggle-checkbox').forEach((cb) => {
                if (cb !== checkbox) {
                    cb.checked = false;
                }
            });
    
            checkbox.checked = true;
    
            const formList = document.getElementById('formList');
            const activeCard = document.getElementById(`formCard_${tem_id}`);
            formList.prepend(activeCard);
            
        })
        .catch(error => console.error('Error:', error));    
    }    