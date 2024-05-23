

    var modal = document.getElementById("addCourseModal");

    var btn = document.getElementById("addCourseBtn");

    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById("saveCourseBtn").addEventListener("click", function() {
        var classCode = document.getElementById("class_code").value;
        var name = document.getElementById("name").value;
        var sections = document.getElementById("sections").value;

        fetch("/manage_courses_API/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": "{{ csrf_token }}"
            },
            body: JSON.stringify({
                class_code: classCode,
                name: name,
                sections: sections
            })
        }).then(response => response.json())
          .then(data => {
              if (data.success) {
                  modal.style.display = "none";
                  location.reload();
              } else {
                  alert("เกิดข้อผิดพลาดในการบันทึกรายวิชา");
              }
          })
          .catch(error => console.error("Error:", error));
    });

    function delete_c(id) {
        fetch("/delete_course_API/" + id + "/", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": "{{ csrf_token }}"
            }
        }).then(response => response.json())
          .then(data => {
              if (data.success) {
                  location.reload();
              } else {
                  alert("เกิดข้อผิดพลาดในการลบรายวิชา");
              }
          })
          .catch(error => console.error("Error:", error));
    }
    

  

