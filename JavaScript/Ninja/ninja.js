class Ninja {
    constructor(name){
        this.name = name;
        this.health = 10;
        this.speed = 3
        this.strength = 3;
    }

    sayName() {
        console.log(`Ninja's Name: ${this.name}`);
    }

    showStats() {
        console.log(`Ninja's Name: ${this.name} Strength: ${this.strength} Speed: ${this.speed} Health: ${this.health}`);
    }

    drinkSaka() {
        this.health += 10
        console.log(`Used Saka +10 Health. Current Health ${this.health}`);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSaka();