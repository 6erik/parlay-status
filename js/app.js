$( document ).ready(function() {
    let endpoint = 'https://scores.weaklytyped.com/api/v1/sports/'

    $.ajax({
        url: endpoint + 'nba' +'/events',
        type: 'GET',
        dataType: 'json',
        contentType: "application/json",
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
        success: function(result){
            console.log(result);
        }
    });

});
