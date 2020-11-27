$(document).ready(function () {
    const timeout = 2000;
    document.title = "Loading...";

    setTimeout(function () {
        $(".container").removeClass("blur");
        $(".preloader").hide();
        $(".img_holder").css("bottom", 0).css("right", 25);
    }, timeout);
    setTimeout(function () {
        $(".contents").load("welcome.html");
        document.title = "Welcome | Abhishek R. Pandey";
    }, timeout * 1.5);

    $("#interest_and_hobbies").click(function (event) {
        event.preventDefault();
        $(".contents").load("interest_and_hobbies.html");
    });

    $("#related_trainings").click(function (event) {
        event.preventDefault();
        $(".contents").load("related_trainings.html");
    });

    $("#technology_summary").click(function (event) {
        event.preventDefault();
        $(".contents").load("technology_summary.html");
    });

    $("#career_objective").click(function (event) {
        event.preventDefault();
        $(".contents").load("career_objective.html");
    });

    $("#expertise").click(function (event) {
        event.preventDefault();
        $(".contents").load("expertise.html");
    });

    $("#education").click(function (event) {
        event.preventDefault();
        $(".contents").load("education.html");
    });
});
