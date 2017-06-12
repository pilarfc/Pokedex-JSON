var cargarPagina = function (){
  cargarPokemones();

};

var cargarPokemones = function () {
  var url = "http://pokeapi.co/api/v2/pokemon/";
$.getJSON(url, function(response){
    var pokemones = response.results;
    agregarPokemones(pokemones);
  });
}; 


var sprite = 0;

function agregarPokemones(pokemones){
    pokemones.forEach(function(pokemon, indice){ 
        var $li = $("<li />", {"data-indice": indice, "data-url": pokemon.url});
        $li.append($("<div />").css("background", "url(assets/img/pokemones_sprite.png)" + sprite + "px 0"));
        $("#lista_pokemones").append($li.append($(plantillaModal).text(pokemon.name)));
        sprite -= 80;
    });
    
};

var plantillaModal = '<a class="waves-effect waves-light btn" href="#modal"></a>';

// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();



$(document).ready(cargarPagina);