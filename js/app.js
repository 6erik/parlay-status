$( document ).ready(function() {

    const url1 = "http://gobetween.oklabs.org/";
    const url2 = "https://cors-anywhere.herokuapp.com/";

    console.log("app.js - Document ready")

});


$('#search').click(function() {
    const url2 = "https://cors-anywhere.herokuapp.com/";

    $.ajax({
        url: url2 + "https://scores.weaklytyped.com/api/v1/sports/nba/events",
        crossDomain: "false",
        success: function(result){
            if (result) {
                var len = result.scores.length;
                var str = "";

                if(len > 0){
                    for(var i = 0; i < len; i++){
                        let game = result.scores[0].shortName;
                        let awayScore = result.scores[0].teams.awayTeam.score;
                        let homeScore = result.scores[0].teams.homeTeam.score;

                        console.log(game + " " + awayScore + " " + homeScore);

                            str += "<tr><td>" + game + "</td><td>" + awayScore + "</td><td>" + homeScore + "</td></tr>";
                        }
                    }
                    if(str != ""){
                        $("#table").append(str).removeClass("hidden");
                    }
                }
                console.log(result);
            },
        error: function(error){
            console.log(error);
        }
    });
});
