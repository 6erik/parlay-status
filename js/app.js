$( document ).ready(function() {

    var url = "https://scores.weaklytyped.com/api/v1/sports/nba/events";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }};

    xhr.send();


});
