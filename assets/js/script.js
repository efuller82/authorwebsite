$(document).ready(function () {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://theysaidso.p.rapidapi.com/quote?query=software",
        "method": "GET",
        "headers": config
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        $('#qotd').append(response.contents.quote)
        $('#qotd-author').append(response.contents.author)
    });
})