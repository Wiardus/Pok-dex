
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
function displayName() {
    let inputValue = input.value;
    if (inputValue == 1) {
        document.getElementById("disRight").innerHTML = Object.values(bulbasaur);
    } else if (inputValue == 2) {
        document.getElementById("disRight").innerHTML = Object.values(ivysaur);;
    } else if (inputValue == 3) {
        document.getElementById("disRight").innerHTML = Object.values(venusaur);
    }  
}
