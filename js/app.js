$( document ).ready(function() {
    console.log("app.js: Document ready (top)")

    class Parlay {
        constructor() {
            this.games = [];
            this.legCount = 0;
        }

        addLeg(game) {
            this.games.push(game);
            this.legCount += 1;
        }

        removeLeg(gameIndex) {
            this.games.splice(gameIndex, 1);
            this.legCount -= 1;
        }

        getLegCount() {
            return this.legCount;
        }
    }

    const url1 = "http://gobetween.oklabs.org/";
    const url2 = "https://cors-anywhere.herokuapp.com/";

    

    console.log("app.js: Document ready (bottom)")

});


$('#listNBA').click(function() {
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
                        $("#tableNBA").append(str).removeClass("hidden");
                    }
                }
                console.log(result);
            },
        error: function(error){
            console.log(error);
        }
    });
});

$('#listNCAAM').click(function() {
    const url2 = "https://cors-anywhere.herokuapp.com/";

    $.ajax({
        url: url2 + "https://scores.weaklytyped.com/api/v1/sports/ncaam/events",
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
                        $("#tableNCAAM").append(str).removeClass("hidden");
                    }
                }
                console.log(result);
            },
        error: function(error){
            console.log(error);
        }
    });
});
