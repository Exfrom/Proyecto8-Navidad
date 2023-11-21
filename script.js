// Función para obtener el tiempo faltante hasta una fecha límite
function obtenerTiempoFaltante(fechaLimite) {
    const ahora = new Date();
    tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);
    return {
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    };
}

// Función para manejar la cuenta regresiva
function cuentaRegresiva(tiempoFaltante, reloj, mensaje) {
    const e = document.getElementById(reloj);

    const tiempoActual = setInterval(() => {
        let t = obtenerTiempoFaltante(tiempoFaltante);
        e.innerHTML =
            `
            <div class="mensajeInicial"> Faltan días para navidad </div>
            <div class="cuentaRegresiva">
                <div class="dias">${t.diasFaltantes}</div><br>D
                <div class="horas">${t.horasFaltantes}</div><br>H
                <div class="minutos">${t.minutosFaltantes}</div><br>M
                <div class="segundos">${t.segundosFaltantes}</div><br>S
            </div> 
            `;
        if (t.tiempoFaltante < 1) {
            clearInterval(tiempoActual);
            e.innerHTML = mensaje;
            figuraPlay.classList.add("on");
        }
    }, 1000);
}

// Iniciar la cuenta regresiva con valores específicos
cuentaRegresiva('Dec 25 2023 00:00:00 ', 'cuentaRegresiva', '¡Feliz Navidad!');

// Variables y funciones relacionadas con la animación
let figura = "off";
let figuraPlay = document.getElementById("figuraPlay");
let figuraStop = document.getElementById("figuraStop");
let audio = new Audio("sound/sonidoBoton.mp3");
let audio2 = new Audio("sound/cancion_navidad.mp3");

// Función para reproducir la animación y sonidos al hacer clic en "Play"
function play() {
    if (figura == "off") {
        figura = "on";
        figuraPlay.classList.add("on");
        figuraPlay.addEventListener("click", () => {
            audio.play();
            audio2.play();
        });
        console.log("On");
    }
}

// Función para pausar la animación al hacer clic en "Pause"
function pause() {
    if (figura == "on") {
        figura = "off";
        console.log("Off")
        figuraPlay.classList.remove("on");
        figuraStop.addEventListener("click", () => {
            audio2.pause();
        });
    }
}
