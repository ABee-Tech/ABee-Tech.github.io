$(document).ready(function () {
    var educations = Array();
    educations = [
        {
            qualification: "Master in Business Studies (MBS)",
            passed_year: "3<sup>rd</sup> Semester Running",
            institution: "Active Academy",
            division: "-",
        },
        {
            qualification: "Bachelor in Business Studies (BBS)",
            passed_year: "2018 A.D.",
            institution: "Shivapuri College",
            division: "Second",
        },
        {
            qualification: "+2 in Management",
            passed_year: "2014 A.D.",
            institution: "Takshashila Academy",
            division: "First",
        },
        {
            qualification: "SLC",
            passed_year: "2012 A.D.",
            institution: "Little Rose Boarding High School",
            division: "First",
        },
    ];

    $.each(interests, function (key, value) {
        $(".education table").append(
            `<tr>
            <td>${value.qualification} </td>
            <td>${value.passed_year}</td>
            <td>${value.institution}</td>
            <td>${value.division}</td>
        </tr>`
        );
    });
});
