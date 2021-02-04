$( document ).ready(function() {

    $.ajax({
        url: "https://scores.weaklytyped.com/api/v1/sports/nba/events",
        type: "GET",
        dataType: "json",
        crossDomain: true,
        success: function(result){
            console.log(result);
        }
    }); 

});
