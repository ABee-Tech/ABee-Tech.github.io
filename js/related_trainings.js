$(document).ready(function () {
    var related_trainings = Array();
    related_trainings = [
        "Been through several UI/UX related tutorials on YouTube",
        "Taken Udemy course on Full Stack Web Development (includes PHP as back-end)",
        "Other online courses. For example: w3schools.com, freecodecamp.org",
    ];

    $.each(related_trainings, function (key, value) {
        $("#related_trainings_list").append(
            `
            <li>
            <span>
                ${value}
            </span>
            </li>
            `
        );
    });
});
