function searchPokemon() {
    const P = new Pokedex.Pokedex()

    P.getPokemonByName(document.getElementById('input').value)
    .then(function(response) {
        console.log(response)

        const displayRight = document.getElementById('disRight')
        let pokemonName = document.createElement('p')

        pokemonName.innerHTML = "Name: " + response.name
        pokemonName.setAttribute('id', 'pokemonName')
        displayRight.appendChild(pokemonName)
        

       //const display2 = document.getElementById('display2')
       // display2.innerHTML = response.sprites.front_default
        
    }) 
}   

const remove = () => {
    pokemonName.remove();
}






let bulbasaur = {
    name: 'Bulbasaur',
    type: 'Grass',
    secondType: 'Poison',
    weight: '6.9 kg',
    height: '0.7 m'
};

let ivysaur = {
    name: 'Ivysaur',
    type: 'Grass',
    secondType: 'Poison',
    weight: '13 kg',
    height: '1 m'
}

let venusaur = {
    name: 'Venusaur',
    type: 'Grass',
    secondType: 'Poison',
    weight: '100 kg',
    height: '2 m'
}

// displays the properties of the Pokémon on the screen
/* function displayName() {
    let inputValue = input.value;
    if (inputValue == 1) {
        document.getElementById("disRight").innerHTML = Object.values(bulbasaur);
    } else if (inputValue == 2) {
        document.getElementById("disRight").innerHTML = Object.values(ivysaur);;
    } else if (inputValue == 3) {
        document.getElementById("disRight").innerHTML = Object.values(venusaur);
    }  
} */



/* var inputValue = input.value;

if (inputValue == 1) {
    for (const [key, value] of Object.entries(bulbasaur)) {
        var element = document.createElement('p');
        element.setAttribute('id', key);
        element.innerHTML = $;{key}:$;{value};
        document.getElementById('disRight').appendChild(element);
    }   
} */