
/*
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('button-jugar').addEventListener('click', function() {
        document.getElementById('pantalla-inicial').classList.add('hidden');
        document.getElementById('pantalla-juego').classList.remove('hidden');
    });
});

document.getElementById('button-instrucciones').addEventListener('click', function() {
    document.getElementById('instrucciones').classList.toggle('hidden');
});


document.getElementById('button-reiniciar').addEventListener('click', function() {
    document.getElementById('pantalla-final').classList.add('hidden');
    document.getElementById('pantalla-inicial').classList.remove('hidden');
});
*/


const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump(){
    if(dino.classList != "jump"){ //no reseteará la animación una y otra vez
        dino.classList.add("jump");
    }

    setTimeout(function() {  //elimina la clase jump, para poder volver a ejecutarlo
        dino.classList.remove("jump");
    }, 400);
}

let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus) . getPropertyValue("left"));

    if(cactusLeft < 20 && cactusLeft > 0 && dinoTop >= 130){
        cactus.style.animation = "none";
        cactus.style.display = "none"; //ES NECESARIO REINICIAR SI SE USA ESTO
        alert("Game Over!");
    }
}, 10);

document.addEventListener("keydown", function(event){ //con cualquier tecla salta
    jump();
});



/*
var block = document.getElementById("block");

function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}


var checkDead = setInterval(function(){
    var characterTop =
    parseInt(window.getComputedStyle(character) . getPropertyValue("top"));
    var blockLeft =
    parseInt(window.getComputedStyle(character) . getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
            block.style.animation = "none";
            block.style.display = "none";
            alert("u lose!");
        }
},10);

*/