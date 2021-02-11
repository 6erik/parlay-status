class Parlay {
    constructor() {
        this.games = [];
        this.legCount = 0;
    }

    addLeg(game) {
        this.games.push(game);
        this.legCount += 1;
        console.log(this.games);
        //refreshParlay();
    }

    removeLeg(gameIndex) {
        this.games.splice(gameIndex, 1);
        this.legCount -= 1;
    }

    getLegCount() {
        return this.legCount;
    }
}

let parlay = new Parlay();
/* Size 2 currently for the 2 supported leagues
0: NBA
1: NCAAM
*/
let resultsArray = new Array(2); 


/*
function refreshParlay() {
    $("#tableParlay tr").remove();

    var len = parlay.getLegCount();
    var str = "";

    for (var i = 0; i < len; i++) {
        

        str += "<tr><td>" + game + "</td><td>" + awayScore + "</td><td>" + homeScore;
        str += "</td><td><button id=\"button" + i + "\">Add</button>" +  "</td></tr>";
    }

    console.log("Refreshed parlay table");
}
*/

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

    parlay.addLeg(resultsArray[buttonNum]);
});


$('#listNBA').click(function() {
    console.log("app.js: Clicked 'listNBA' button");
    const urlCORS = "https://cors-anywhere.herokuapp.com/";
    const urlAPI = "https://score-board-api.herokuapp.com/api/v1/sports/nba/events";
    $.ajax({
        url: urlCORS + urlAPI,
        crossDomain: "false",
        success: function(result){
            if (result) {
                resultsArray[0] = result.scores;
                //console.log(resultsArray[0]);
                updateTable("NBA");
                }
            },
        error: function(error){
            console.log(error);
        }
    });
});

function updateTable(league) {
    console.log("Updating '" + league +"' table.");
    if (league == "NBA") {
        leagueIndex = 0;
        $("#tableNBA tr").remove(); 
    }
    else if (league == "NCAAM") {
        leagueIndex = 1;
    }
    
    var len = resultsArray[leagueIndex].length;
    var str = "";

    if(len > 0){
        for(var i = 0; i < len; i++){
            let game = resultsArray[leagueIndex][i].shortName;
            let awayScore = resultsArray[leagueIndex][i].teams.awayTeam.score;
            let homeScore = resultsArray[leagueIndex][i].teams.homeTeam.score;

            str += "<tr><td>" + game + "</td><td>" + awayScore + "</td><td>" + homeScore;
            str += "</td><td><button id=\"button" + i + "\">Add</button>" +  "</td></tr>";
            }
        }
        
    if (league == "NBA") {
        $("#tableNBA").append(str).removeClass("hidden");
    }
};

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
