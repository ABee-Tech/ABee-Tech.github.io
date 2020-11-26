$(document).ready(function () {
    var interests = Array();
    interests = [
        {
            fa: "fas fa-music",
            desc: "Playing musical instruments and singing",
        },
        {
            fa: "fas fa-camera",
            desc: "Photography",
        },
        {
            fa: "fas fa-book-reader",
            desc: "Learning new things",
        },
    ];

    $.each(interests, function (key, value) {
        $("#interests").append(
            `<li><i class="${value.fa}"></i><span> ${value.desc} </span></li>`
        );
    });
});
