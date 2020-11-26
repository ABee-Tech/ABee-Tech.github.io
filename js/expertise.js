$(document).ready(function () {
    var expertises = Array();
    expertises = [
        {
            fa: "fas fa-pencil-ruler",
            desc: "UI/UX Designing",
        },
        {
            fa: "fas fa-code",
            desc: "Web Application Development",
        },
        {
            fa: "fab fa-android",
            desc: "Android App Developent",
        },
        {
            fa: "fas fa-laptop-code",
            desc: "Codding and Programming",
        },
        {
            fa: "far fa-analytics",
            desc: "Data Analysis",
        },
    ];

    $.each(expertises, function (key, value) {
        $("#expertise_list").append(
            `<li><i class="${value.fa}"></i><span> ${value.desc} </span></li>`
        );
    });
});
