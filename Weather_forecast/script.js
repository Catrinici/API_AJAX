

$(document).ready(function() {
    $('form').submit(function() {
        var api_key = 'b433edb09065e7d05581bb19ffd63c58';
        var city = $('input#city').val();

        $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${api_key}`, function(res) {
            console.log(res);
            var html = "";
            html += `<p> ${res['name']}: ${res['weather'][0]['description']} </p>`;
            html += `<p> Temperature:${res['main']['temp']} F</p>`;
            html += `<p> Coord: ${res['coord'].lat}, ${res['coord'].lon}`
            $('#results').html(html);
        }, 'json');
        return false;
    })
})
