class Character{
    constructor(name, health, attackPower) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
    }
}

class Enemy extends Character{
    constructor(name, health, attackPower) {
        super(name, health, attackPower);
    }
}

class Player extends Character{
    constructor(name, health, attackPower) {
        super(name, health, attackPower);
    }
}

let characterSrc;
let gameZoneBody;

function chooseCharacter(){
    const choices = document.getElementsByName('character');
    for (let index = 0; index < choices.length; index++) {
        if(choices[index].checked){
            characterSrc = `../Asserts/images/${choices[index].value}.png`;
            localStorage.setItem("characterImageSrc", characterSrc)
            break;
        }
        
    }
}


