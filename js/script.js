$(document).ready(function () {


    var queue = new createjs.LoadQueue();
    queue.on("complete", handleComplete, this);
    queue.loadManifest([
        { id: "hero", src: "./img/av1.gif" },
        { id: "bubble", src: "./img/bubble.png" },
        { id: "style", src: "./css/style.css", type: createjs.AbstractLoader.CSS },
        { id: "js1", src: "./js/career_objective.js" },
        { id: "js2", src: "./js/education.js" },
        { id: "js3", src: "./js/expertise.js" },
        { id: "js4", src: "./js/interest_and_hobbies.js" },
        { id: "js5", src: "./js/related_trainings.js" },
        { id: "js6", src: "./js/technology_summary.js" },
        { id: "html1", src: "./career_objective.html" },
        { id: "html2", src: "./education.html" },
        { id: "html3", src: "./expertise.html" },
        { id: "html4", src: "./interest_and_hobbies.html" },
        { id: "html5", src: "./related_trainings.html" },
        { id: "html6", src: "./technology_summary.html" },
        { id: "html7", src: "./welcome.html" },
    ]);
    document.title = "Loading...";

    function handleComplete() {
        console.log("Loaded")

        setTimeout(function () {
            $(".container").removeClass("blur");
            $(".preloader").hide();
            $(".img_holder").css("bottom", 0).css("right", 25);
        }, 1000);
        setTimeout(function () {
            $(".contents").load("welcome.html");
            document.title = "Welcome | Abhishek R. Pandey";
        }, 1500);
    }








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
