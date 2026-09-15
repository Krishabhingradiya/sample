window.onload = function () {
    fetch('courses.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");
            const courses = xml.getElementsByTagName('course');
            let output = "<ul>";

            for (let i = 0; i < courses.length; i++) {
                let name = courses[i].getElementsByTagName('name')[0].textContent;
                let duration = courses[i].getElementsByTagName('duration')[0].textContent;
                output += `<li><strong>${name}</strong> - ${duration}</li>`;
            }

            output += "</ul>";
            document.getElementById("course-list").innerHTML = output;
        });
};
