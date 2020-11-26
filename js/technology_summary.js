$(document).ready(function () {
    var technologies = Array();
    technologies = [
        "Adobe XD",
        "Adobe Illustration",
        "Adobe Photoshop",
        "HTML5",
        "CSS",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "React JS",
        "PHP",
        "SQL",
        "Git",
    ];

    $.each(technologies, function (key, value) {
        $("#technological_summary_list").append(
            `<li><span>${value}</span></li>`
        );
    });
});
