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
        document.title = "Interests and Hobbies | Abhishek R. Pandey";
        $.getScript("/js/interest_and_hobbies.js");

        $(":root").css("--primary-color-dark", "#00b894");
        $(":root").css("--primary-color-light", "#138566");
        $(":root").css("--secondary-color", "#81ecec");
    });

    $("#related_trainings").click(function (event) {
        event.preventDefault();
        $(".contents").load("related_trainings.html");
        document.title = "Related Trainings | Abhishek R. Pandey";

        $(":root").css("--primary-color-dark", "#d63031");
        $(":root").css("--primary-color-light", "#fd5453");
        $(":root").css("--secondary-color", "#fab1a0");
    });

    $("#technology_summary").click(function (event) {
        event.preventDefault();
        $(".contents").load("technology_summary.html");
        document.title = "Technology Summary | Abhishek R. Pandey";

        $(":root").css("--primary-color-dark", "#6c5ce7");
        $(":root").css("--primary-color-light", "#0984e3");
        $(":root").css("--secondary-color", "#74b9ff");
    });

    $("#career_objective").click(function (event) {
        event.preventDefault();
        $(".contents").load("career_objective.html");
        document.title = "Career Objective | Abhishek R. Pandey";

        $(":root").css("--primary-color-dark", "#ce9d00");
        $(":root").css("--primary-color-light", "#c7a53a");
        $(":root").css("--secondary-color", "#f5f36b");
    });

    $("#expertise").click(function (event) {
        event.preventDefault();
        $(".contents").load("expertise.html");
        document.title = "Expertise | Abhishek R. Pandey";

        $(":root").css("--primary-color-dark", "#574b90");
        $(":root").css("--primary-color-light", "#786fa6");
        $(":root").css("--secondary-color", "#82b8cb");
    });

    $("#education").click(function (event) {
        event.preventDefault();
        $(".contents").load("education.html");
        document.title = "Education | Abhishek R. Pandey";

        $(":root").css("--primary-color-dark", "#c44569");
        $(":root").css("--primary-color-light", "#f9658f");
        $(":root").css("--secondary-color", "#ffc7d7");
    });
});
