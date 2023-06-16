const eatButton = document.getElementById("eatButton");
const drinkButton = document.getElementById("drinkButton");
const playButton = document.getElementById("playButton");
const sleepButton = document.getElementById("sleepButton");

const healthBar = document.getElementById("healthBar");
const thirstBar = document.getElementById("thirstBar")
const entertainmentBar = document.getElementById("entertainmentBar")
const sleepBar = document.getElementById("sleepBar")

const getPetFromURL = () => {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query)

    return urlParams.get("pet")
}

function getColor(percentage) {
    if (percentage >= 60) {
        return "green";
    } else if (percentage >= 30) {
        return "yellow";
    } else {
        return "red";
    }
}

function startHealthBarAnimation(pokemonHealth) {
    for (let i = pokemonHealth; i > 0; i -= 1) {
        setTimeout(() => {
            const percentage = i;
            healthBar.style.width = percentage + "%";
            healthBar.style.backgroundColor = getColor(percentage);
        }, 500 * (pokemonHealth - i));
    }
}


function startThirstBarAnimation(pokemonThirst) {
    for (let i = pokemonThirst; i > 0; i -= 1) {
        setTimeout(() => {
            const percentage = i;
            thirstBar.style.width = percentage + "%";
            thirstBar.style.backgroundColor = getColor(percentage);
        }, 500 * (pokemonThirst - i));
    }
}

function startEntertainmentBarAnimation(pokemonEntertainment) {
    for (let i = pokemonEntertainment; i > 0; i -= 1) {
        setTimeout(() => {
            const percentage = i;
            entertainmentBar.style.width = percentage + "%";
            entertainmentBar.style.backgroundColor = getColor(percentage);
        }, 500 * (pokemonEntertainment - i));
    }
}

function startSleepBarAnimation(pokemonSleep) {
    for (let i = pokemonSleep; i > 0; i -= 1) {
        setTimeout(() => {
            const percentage = i;
            sleepBar.style.width = percentage + "%";
            sleepBar.style.backgroundColor = getColor(percentage);
        }, 500 * (pokemonSleep - i));
    }
}

window.addEventListener("load", () => {
    let petName = getPetFromURL()
    let pet

    if (petName == "pikachu") {
        pet = new Pokemon("Pikachu", 65, 80, 100, 100);
    } else if (petName == "charmander") {
        pet = new Pokemon("Charmander", 80, 80, 60, 70);
    } else if (petName == "bulbasaur") {
        pet = new Pokemon("Bulbasaur", 80, 90, 80, 70);
    } else if (petName == "jigglypuff") {
        pet = new Pokemon("Jigglypuff", 70, 90, 90, 65);
    }

    document.getElementById("card").src = `./images/${pet.pokemonName}.png`

    startHealthBarAnimation(pet.pokemonHealth);
    startThirstBarAnimation(pet.pokemonThirst);
    startEntertainmentBarAnimation(pet.pokemonEntertainment);
    startSleepBarAnimation(pet.pokemonSleep);
    
    eatButton.addEventListener("click", () => {
        pet.eat();
    });    
});