$( document ).ready(function() {

    console.log("test 1");

    $.ajax({
        url: "https://scores.weaklytyped.com/api/v1/sports/nba/events",
        crossDomain: "false",
        success: function(result){
            console.log(result);
        },
        error: function(error){
            //console.log(error);
        }
    }); 

});
