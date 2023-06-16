const pikachu = document.getElementById("pikachu")
const charmander = document.getElementById("charmander")
const jigglypuff = document.getElementById("jigglypuff")
const bulbasaur = document.getElementById("bulbasaur")

let hasClicked = false

//play sounds for pokemon//

const pikachuSound = new Audio('sounds/pikachu.mp3');
const charmanderSound = new Audio('sounds/charmander.mp3');
const puffSound = new Audio('sounds/puff.mp3');
const bulbSound = new Audio('sounds/bulbasaur.mp3');

//Pikachu Events
pikachu.addEventListener("mousedown", (event) => {
    if (event.button != 0) {return false}
    if (hasClicked) {return false}
    pikachuSound.play()
    pikachu.classList.add("decrease-size")

    charmander.remove();
    jigglypuff.remove();
    bulbasaur.remove();

    setTimeout(function() {
        window.location.href = "./game.html?pet=pikachu";
    }, 1500)

    hasClicked = true
})
pikachu.addEventListener("mouseover", function(){
    if (hasClicked) {return false}

    pikachu.classList.add("mid-size")
});
pikachu.addEventListener("mouseout", function(){
    if (hasClicked) {return false}
    
    pikachu.classList.remove("mid-size")
});

//Charmander Events
charmander.addEventListener("mousedown", (event) => {
    if (event.button != 0) {return false}
    if (hasClicked) {return false}
    charmanderSound.play()
    charmander.classList.add("decrease-size")

    pikachu.remove();
    jigglypuff.remove();
    bulbasaur.remove();

    setTimeout(function() {
        window.location.href = "./game.html?pet=charmander";
    }, 1000)

    hasClicked = true
})
charmander.addEventListener("mouseover", function(){
    if (hasClicked) {return false}
    charmander.classList.add("mid-size")
});
charmander.addEventListener("mouseout", function(){
    if (hasClicked) {return false}
    charmander.classList.remove("mid-size")
});

//Jigglypuff Events
jigglypuff.addEventListener("mousedown", (event) => {
    if (event.button != 0) {return false}
    if (hasClicked) {return false}
    puffSound.play()
    jigglypuff.classList.add("decrease-size")

    pikachu.remove();
    charmander.remove();
    bulbasaur.remove();

    setTimeout(function() {
        window.location.href = "./game.html?pet=jigglypuff";
    }, 1000)

    hasClicked = true
})
jigglypuff.addEventListener("mouseover", function(){
    if (hasClicked) {return false}
    jigglypuff.classList.add("mid-size")
});
jigglypuff.addEventListener("mouseout", function(){
    if (hasClicked) {return false}
    jigglypuff.classList.remove("mid-size")
});

//Bulbasaur Events
bulbasaur.addEventListener("mousedown", (event) => {
    if (event.button != 0) {return false}
    if (hasClicked) {return false}
    bulbSound.play()
    bulbasaur.classList.add("decrease-size")

    pikachu.remove();
    charmander.remove();
    jigglypuff.remove();

    setTimeout(function() {
        window.location.href = "./game.html?pet=bulbasaur";
    }, 1000)

    hasClicked = true
})
bulbasaur.addEventListener("mouseover", function(){
    if (hasClicked) {return false}
    bulbasaur.classList.add("mid-size")
});
bulbasaur.addEventListener("mouseout", function(){
    if (hasClicked) {return false}
    bulbasaur.classList.remove("mid-size")
});