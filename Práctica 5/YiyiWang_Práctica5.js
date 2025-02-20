const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const botonReiniciar = document.getElementById("button-reiniciar");

function jump() {
    if (!dino.classList.contains("jump")) { // no reseteará la animación una y otra vez
        dino.classList.add("jump");
        setTimeout(() => dino.classList.remove("jump"), 400); // elimina la clase jump, para poder volver a ejecutarlo
    }
}

// PROMESA para jugar 10 segundos
function jugarPartida() {
    return new Promise((resolve, reject) => {
        let tiempoJuego = setTimeout(() => {
            resolve("¡Enhorabuena! Ganaste.");
        }, 10000); // 10 segundos para ganar

        let isAlive = setInterval(() => {
            let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
            let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

            if (cactusLeft < 25 && cactusLeft > 0 && dinoTop >= 150) { // revisa la distancia a la que están
                clearTimeout(tiempoJuego); // cancela la victoria si pierde
                clearInterval(isAlive);
                cactus.style.animation = "none"; //PARA QUE NO CHOQUE UNA Y OTRA VEZ
                cactus.style.display = "none"; //HACE DESAPARECER EL BLOQUE ROJO
                botonReiniciar.style.display = "block"; // asegura que se muestre sí o sí
                reject("Game Over. ¡Inténtalo de nuevo!"); // rechaza la promesa
            }
        }, 10); //cada 10ms ejecuta la función para comprobar la posición del dinosaurio y el cactus
    });
}

//INICIA la partida
document.getElementById('button-jugar').addEventListener('click', function() {
    document.getElementById('pantalla-inicial').style.display = "none";
    document.getElementById('pantalla-juego').classList.remove('hidden');
    
    cactus.style.animation = "block 1s infinite linear";
    cactus.style.display = "block";

    jugarPartida()
        .then((mensaje) => alert(mensaje)) // Muestra el mensaje de victoria si sobrevive
        .catch((mensaje) => alert(mensaje)); // Muestra el mensaje de derrota si choca
});

// REINICIA el juego
botonReiniciar.addEventListener("click", function() {
    document.getElementById("pantalla-inicial").style.display = "flex";
    document.getElementById('pantalla-juego').classList.add('hidden');
    botonReiniciar.style.display = "none";
});

// acciona el teclado para saltar
document.addEventListener("keydown", jump);

// muestra las instrucciones
document.getElementById('button-instrucciones').addEventListener('click', function() {
    document.getElementById('instrucciones').classList.toggle('hidden');
});

// WEB COMPONENT 
class SaltaTitulo extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        const h2 = document.createElement('h2');
        h2.textContent = '¡SALTA!';
        this.shadow.appendChild(h2);
        h2.addEventListener('click', () => h2.style.color = 'red'); // Cambia el color al hacer clic
    }
}

customElements.define('salta-titulo', SaltaTitulo);
