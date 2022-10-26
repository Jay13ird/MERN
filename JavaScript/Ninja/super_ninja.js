class Ninja {
    constructor(name){
        this.name = name;
        this.health = 10;
        this.speed = 3
        this.strength = 3;
    }

    sayName() {
        console.log(`Name: ${this.name}`);
    }

    showStats() {
        console.log(`Name: ${this.name} Health: ${this.health} Strength: ${this.strength} Speed: ${this.speed}`);
    }

    drinkSaka() {
        this.health += 10
        console.log(`Used Saka +10 Health. Current Health ${this.health}`);
    }

    speakWisdom() {
        this.drinkSaka()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom) {
        super(name, health, speed, strength, wisdom)
        this.health = 200
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
