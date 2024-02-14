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

let enemy = new Enemy("Enemy", 100, 18);
let player = new Player("Player", 100, 7);
let click = Math.floor(Math.random() * 5);

document.addEventListener("DOMContentLoaded", function() {
    var imgSrc = localStorage.getItem("characterImageSrc");
    if (imgSrc) {
        var img = document.getElementById("hero");
        if (img) {
            console.log("sffdsfdd");
            img.src = imgSrc;
    }}
}
);

document.getElementById("attackBtn").addEventListener("click", function(){
    document.getElementById("enemyHealth").value -=player.attackPower;
    if(click == 0 || click < 1){
        document.getElementById("playerHealth").value -=enemy.attackPower;
        click = Math.floor(Math.random() * 5);
    }
    click--;
    if(document.getElementById("playerHealth").value <= 0 || document.getElementById("enemyHealth").value <= 0){
        const innerDiv = document.getElementById("gamezone-body");
        if(document.getElementById("playerHealth").value <= 0){
            innerDiv.style.marginTop = "270px"
            innerDiv.innerHTML = "You Lost!";
            innerDiv.style.color = "red";
            innerDiv.style.fontSize = "50px";
            console.log("You Lost!");

        }
        else{
            innerDiv.style.marginTop = "270px"
            innerDiv.innerHTML = "You Won!";
            innerDiv.style.color = "green";
            innerDiv.style.fontSize = "50px";
            console.log("You Won!");
        }
    }
})