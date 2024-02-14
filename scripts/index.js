
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


