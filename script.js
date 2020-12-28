$(document).ready(function() {
    $('#searchButton').click(function() {
        let input = $('#searchBar').val();
        let inputFinal = input.replace(/\s/g, '+');
        let initUrl = 'http://www.omdbapi.com/?t=';
        let apiKey = config.MY_KEY;
        let apiUrl = '&apikey=' + apiKey;
        let finalUrl = initUrl + inputFinal + apiUrl;
        // console.log(finalUrl);
        // console.log(inputFinal);
        $.ajax({
            url: finalUrl,
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(data) {
                console.log(data);
                $('#movieDetails').empty();
                $('#movieDetails').append('<br><br>Name: ' + data.Title + '<br>Plot: ' + data.Plot + '<br>Genre(s): ' + data.Genre + '<br>Rated: ' + data.Rated +  '<br>Language(s): ' + data.Language + '<br>IMDB Rating: ' + data.imdbRating + '<br>Actors: ' + data.Actors + '<br>Director(s): ' + data.Director + '<br>Awards: ' + data.Awards + '<br>Length: ' + data.Runtime + '<br>Released: ' + data.Released);
                $('img').attr("src", data.Poster);
            }
        })
    });
    $('#searchBar').keypress(function (e) {
        var key = e.which;
        if(key == 13)
         {
            let input = $('#searchBar').val();
        let inputFinal = input.replace(/\s/g, '+');
        let initUrl = 'http://www.omdbapi.com/?t=';
        let apiKey = config.MY_KEY;
        let apiUrl = '&apikey=' + apiKey;
        let finalUrl = initUrl + inputFinal + apiUrl;
        // console.log(finalUrl);
        // console.log(inputFinal);
        $.ajax({
            url: finalUrl,
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(data) {
                console.log(data);
                $('#movieDetails').empty();
                $('#movieDetails').append('<br><br>Name: ' + data.Title + '<br>Plot: ' + data.Plot + '<br>Genre(s): ' + data.Genre + '<br>Rated: ' + data.Rated +  '<br>Language(s): ' + data.Language + '<br>IMDB Rating: ' + data.imdbRating + '<br>Actors: ' + data.Actors + '<br>Director(s): ' + data.Director + '<br>Awards: ' + data.Awards + '<br>Length: ' + data.Runtime + '<br>Released: ' + data.Released);
                $('img').attr("src", data.Poster);
            }
        }) 
         }
       });  
});