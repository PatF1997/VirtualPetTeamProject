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