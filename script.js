//play sounds for pokemon//

const logo = document.getElementById("logo")
const mainThemeAudio = new Audio("sounds/pokemontheme.mp3")
logo.addEventListener("click", () => {
    mainThemeAudio.pause();
    mainThemeAudio.play();
} )


const pikachuSound = new Audio();

pikachuSound.src = "sounds/pikachu.mp3"

const charmanderSound = new Audio();

charmanderSound.src = "sounds/charmander.mp3"

const puffSound = new Audio();

puffSound.src = "sounds/puff.mp3"

const bulbSound = new Audio();

bulbSound.src = "sounds/bulbasaur.mp3"

const pokemonTheme = new Audio(); 

pokemonTheme.src = "sounds/pokemontheme.mp3"






const eatButton = document.getElementById("eatButton");
const drinkButton = document.getElementById("drinkButton");
const playButton = document.getElementById("playButton");
const sleepButton = document.getElementById("sleepButton");



const healthBar = document.getElementById("healthBar");
const thirstBar = document.getElementById("thirstBar")
const entertainmentBar = document.getElementById("entertainmentBar")
const sleepBar = document.getElementById("sleepBar")



class Pokemon {
    constructor(pokemonName, pokemonHealth, pokemonThirst, pokemonEntertainment, pokemonSleep) {
        this.pokemonName = pokemonName;
        this.pokemonHealth = pokemonHealth;
        this.pokemonThirst = pokemonThirst;
        this.pokemonEntertainment = pokemonEntertainment;
        this.pokemonSleep = pokemonSleep;
    }

    getPokemonInfo() {
        return `${this.pokemonName} \nhealth: ${this.pokemonHealth}\nthirst: ${this.pokemonThirst} \nentertainment: ${this.pokemonEntertainment}\nsleep: ${this.pokemonSleep}`;
    }

    eat() {
        this.pokemonHealth += 15;
        this.pokemonThirst -=5;
    }

    drink() {
        this.pokemonThirst += 15;
    }

    play() {
        this.pokemonEntertainment += 15;
        this.pokemonSleep -= 10
    }

    rest() {
        this.pokemonSleep += 30;
        this.pokemonHealth -=5;
        this.pokemonThirst -=5;
        
    }
}



const Bulbasaur = new Pokemon("Bulbasaur", 80, 90, 80, 70);
const Charmander = new Pokemon("Charmander", 80, 80, 60, 70);
const Jigglypuff = new Pokemon("Jigglypuff", 70, 90, 90, 65);
const Pikachu = new Pokemon("Pikachu", 65, 80, 100, 100);




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
    const currentPage = window.location.pathname; // Get the current page's path

    // Check if the current page is "index.html"
    if (currentPage === "/pikachu.html") {
        const startingHealth = Pikachu.pokemonHealth;
        const startingThirst = Pikachu.pokemonThirst;
        const startingEntertainment = Pikachu.pokemonEntertainment;
        const startingSleep = Pikachu.pokemonSleep;

       
        startHealthBarAnimation(startingHealth);
        startThirstBarAnimation(startingThirst);
        startEntertainmentBarAnimation(startingEntertainment);
        startSleepBarAnimation(startingSleep);

    } else if (currentPage === "/pokemon2.html") {

        const startingHealth = Jigglypuff.pokemonHealth;
        const startingThirst = Jigglypuff.pokemonThirst;
        const startingEntertainment = Jigglypuff.pokemonEntertainment;
        const startingSleep = Jigglypuff.pokemonSleep;
    
    startHealthBarAnimation(startingHealth);
    startThirstBarAnimation(startingThirst);
    startEntertainmentBarAnimation(startingEntertainment);
    startSleepBarAnimation(startingSleep);

    }

});

 





eatButton.addEventListener("click", () => {
    Pikachu.eat();
});















