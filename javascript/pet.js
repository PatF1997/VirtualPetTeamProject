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

