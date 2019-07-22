$(document).ready(function() {
    for (var i = 1; i <= 152; i++) {
        $('.left').append(`<img id="${i}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png">`)
    }

    $(document).on("click", "img", function() {
        var id = this.id
        $.get('http://pokeapi.co/api/v1/pokemon/' + id, function(res) {

        })
    })
})