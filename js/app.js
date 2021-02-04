$( document ).ready(function() {
    let endpoint = 'https://scores.weaklytyped.com/api/v1/sports/'

    $.ajax({
        url: endpoint + 'nba' +'/events',
        type: 'GET',
        dataType: 'json',
        contentType: "application/json",
        success: function(result){
            console.log(result);
        }
    });

});
