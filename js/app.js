class Parlay {
    constructor() {
        this.games = [];
        this.legCount = 0;
    }

    addLeg(game) {
        this.games.push(game);
        this.legCount += 1;
        console.log(this.games);
    }

    removeLeg(gameIndex) {
        this.games.splice(gameIndex, 1);
        this.legCount -= 1;
    }

    getLegCount() {
        return this.legCount;
    }
}

class Leg {
    constructor(id, league) {
        this.id = id;
        this.league = league;
    }
}

let parlay = new Parlay();

$( document ).ready(function() {
    console.log("app.js: Document ready (top)")

    const url1 = "http://gobetween.oklabs.org/";
    const url2 = "https://cors-anywhere.herokuapp.com/";

    const urlAPI = "https://score-board-api.herokuapp.com/api/v1/sports/mlb/events";

    console.log("app.js: Document ready (bottom)")

});

$('#tableNBA').click(function(event) {
    let targetID = event.target.id;
    let buttonNum = targetID.substr(targetID.length - 1);

    let leg = new Leg(buttonNum, "NBA");

    parlay.addLeg(leg);
});


$('#listNBA').click(function() {

    console.log("app.js: Clicked 'listNBA' button")
    const urlCORS = "https://cors-anywhere.herokuapp.com/";
    const urlAPI = "https://score-board-api.herokuapp.com/api/v1/sports/nba/events"

    $("#tableNBA tr").remove(); 

    $.ajax({
        url: urlCORS + urlAPI,
        crossDomain: "false",
        success: function(result){
            if (result) {
                var len = result.scores.length;
                var str = "";

                if(len > 0){
                    for(var i = 0; i < len; i++){
                        let game = result.scores[i].shortName;
                        let awayScore = result.scores[i].teams.awayTeam.score;
                        let homeScore = result.scores[i].teams.homeTeam.score;

                        str += "<tr><td>" + game + "</td><td>" + awayScore + "</td><td>" + homeScore;
                        str += "</td><td><button id=\"button" + i + "\">Add</button>" +  "</td></tr>";
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
    const urlCORS = "https://cors-anywhere.herokuapp.com/";
    const urlAPI = "https://score-board-api.herokuapp.com/api/v1/sports/ncaam/events"

    var ncaamtable = document.getElementById("tableNCAAM");
    ncaamtable.innerHTML = "";

    $.ajax({
        url: urlCORS + urlAPI,
        crossDomain: "false",
        success: function(result){
            if (result) {
                var len = result.scores.length;
                var str = "";

                if(len > 0){
                    for(var i = 0; i < len; i++){
                        let game = result.scores[i].shortName;
                        let awayScore = result.scores[i].teams.awayTeam.score;
                        let homeScore = result.scores[i].teams.homeTeam.score;

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
