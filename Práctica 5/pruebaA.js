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
    let botonReiniciar = document.getElementById("button-reiniciar");

    if(cactusLeft < 25 && cactusLeft > 0 && dinoTop >= 150){ //revisa la distancia a la que están
        cactus.style.animation = "none"; //PARA QUE NO CHOQUE UNA Y OTRA VEZ
        cactus.style.display = "none"; //HACE DESAPARECER EL BLOQUE ROJO
        /*botonReiniciar.classList.remove("hidden"); */
        botonReiniciar.style.display = "block"; // Asegura que se muestre sí o sí

        alert("Game Over. ¡Inténtalo de nuevo!");
    }
}, 10); //cada 10ms ejecuta la función para comprobar la posición del dinosaurio y el cactus


// ESTO HACE QUE FUNCIONE OTRA VEZ SI REINICIO
document.getElementById("button-reiniciar").addEventListener("click", function() {
    cactus.style.animation = "block 1s infinite linear";
    cactus.style.display = "block";

    botonReiniciar.classList.remove("hidden");

});


//acciona el teclado para saltar
document.addEventListener("keydown", function(event){ //con cualquier tecla salta
    jump();
});


//Estructura de botones y páginas
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('button-jugar').addEventListener('click', function(jump) {
        document.getElementById('pantalla-inicial').style.display="none";
        document.getElementById('pantalla-juego').classList.remove('hidden');
    });
});

document.getElementById('button-instrucciones').addEventListener('click', function() {
    document.getElementById('instrucciones').classList.toggle('hidden');
});


document.getElementById('button-reiniciar').addEventListener('click', function() {
    document.getElementById("pantalla-inicial").style.display = "flex";
    document.getElementById('pantalla-juego').classList.add('hidden');
    document.getElementById("button-reiniciar").style.display = "none";
});




//WEB COMPONENT
class SaltaTitulo extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        const h2 = document.createElement('h2');
        h2.textContent = '¡SALTA!';
        this.shadow.appendChild(h2);

        h2.addEventListener('click', () => {
            h2.style.color = 'red'; // Cambia el color cuando se hace clic
        });
    }
}

customElements.define('salta-titulo', SaltaTitulo);



//METER TIMER DE PARTIDA GANADA TRAS 5SEGUNDOS usando promesas

/*function jump() {
    return new Promise((resolve) => {
      console.log("¡La partida ha comenzado! Juega durante 10 segundos...");
      
      setTimeout(() => {
        resolve("¡Enhorabuena! Has ganado la partida 🎉");
      }, 10000); // Espera 10 segundos (10000 milisegundos)
    });
  }
  
  // Usamos .then() para mostrar el mensaje cuando la promesa se resuelva
  jump()
    .then((mensaje) => {
      console.log(mensaje); // "¡Enhorabuena! Has ganado la partida 🎉"
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  */