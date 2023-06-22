const eatButton = document.getElementById("eatButton");
const drinkButton = document.getElementById("drinkButton");
const playButton = document.getElementById("playButton");
const sleepButton = document.getElementById("sleepButton");

const healthBar = document.getElementById("healthBar");
const thirstBar = document.getElementById("thirstBar")
const entertainmentBar = document.getElementById("entertainmentBar")
const sleepBar = document.getElementById("sleepBar")

let speed = 250

const getPetFromURL = () => {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query)

    return urlParams.get("pet")
}

function calculatePercentage(num1, num2) {
    return Math.trunc((num1/num2)*100)
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

function getColor(percentage) {
    if (percentage >= 60) {
        return "green";
    } else if (percentage >= 30) {
        return "yellow";
    } else {
        return "red";
    }
}


function updateHealthbar(pokemonHealth) {
    const percentage = pokemonHealth;
    healthBar.style.width = percentage + "%";
    healthBar.style.backgroundColor = getColor(percentage);
}


function updateThirstBar(pokemonThirst) {
    const percentage = pokemonThirst;
    thirstBar.style.width = percentage + "%";
    thirstBar.style.backgroundColor = getColor(percentage);
}

function updateEntertainmentBar(pokemonEntertainment) {
    const percentage = pokemonEntertainment;
    entertainmentBar.style.width = percentage + "%";
    entertainmentBar.style.backgroundColor = getColor(percentage);
}

function updateSleepbar(pokemonSleep) {
    const percentage = pokemonSleep;
    sleepBar.style.width = percentage + "%";
    sleepBar.style.backgroundColor = getColor(percentage);
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
    } else { window.location.href = "./index.html" }

    document.getElementById("card").src = `./images/${pet.pokemonName}.png`.toLowerCase()

    setInterval(() => {
        pet.pokemonHealth -= 2;
        updateHealthbar(pet.pokemonHealth)
    }, speed);

    setInterval(() => {
        pet.pokemonThirst -= 2;
        updateThirstBar(pet.pokemonThirst)
    }, speed);

    setInterval(() => {
        pet.pokemonEntertainment -= 2;
        updateEntertainmentBar(pet.pokemonEntertainment)
    }, speed);

    setInterval(() => {
        pet.pokemonSleep -= 2;
        updateSleepbar(pet.pokemonSleep)
    }, speed);

    eatButton.addEventListener("click", () => {
        pet.eat();
    });  
    
    drinkButton.addEventListener("click", () => {
        pet.drink();
    });  

    sleepButton.addEventListener("click", () => {
        pet.rest();
    });  

    playButton.addEventListener("click", () => {
        pet.play();
    });  
});