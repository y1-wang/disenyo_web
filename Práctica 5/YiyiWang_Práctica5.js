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


var character = document.getElementById("character");
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

document.getElementById("button-jugar").addEventListener("click", function() {
    document.addEventListener("click", jump);
    document.addEventListener("keydown", function(event){
        if(event.code === "Space"){ 
            jump();
        }
    });
});
