<script>
    function loaddoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) 
        {
            document.getElementById('course-list').innerHTML =this.responseText;
        }
    }
    xhttp.open("GET", "course.xml", true);
    xhttp.send();
    }
</script>