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