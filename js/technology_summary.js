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
    document.title = "Technology Summary | Abhishek R. Pandey";

    $(":root").css("--primary-color-dark", "#6c5ce7");
    $(":root").css("--primary-color-light", "#0984e3");
    $(":root").css("--secondary-color", "#74b9ff");
});
