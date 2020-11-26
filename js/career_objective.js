$(document).ready(function () {
    var objectives = Array();
    objectives = [
        `My education is related to the Management Faculty. I am currently
        studying Master in Business Studies (MBS) on Active Academy. But,
        despite this, I am much more interested in the IT field and have the
        potential as well as skilled to work on your projects. I am a creative
        person dedicated to building and optimizing the performance of
        user-centric, high-impact results for nationwide and global companies.
        Leverage technical, analytical, and problem-solving skills to create
        dynamic, high-speed services fueling competitive advantage and revenue
        growth.`,
    ];

    $.each(objectives, function (key, value) {
        $(".career_objective .info").append(`<p> ${value} </p>`);
    });
});
