// Función para obtener el tiempo faltante hasta una fecha límite
function obtenerTiempoFaltante(fechaLimite){
    let ahora = new Date();
    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante/ 3600 % 24)).slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante/ (3600 * 24))).slice(-2);
return{
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    }
};

let noel = "off";
let noelStop = document.getElementById("noelQuieto");
let noelplay = document.getElementById("play");
let noelpause = document.getElementById("pause");
let sonidoFondo = new Audio ("./sounds/allWant.mp3");
function cuentaRegresiva(tiempoFaltante,reloj,mensaje) {
    const tiempoActual = setInterval(() => {  
        let t = obtenerTiempoFaltante(tiempoFaltante);
        const dias = document.querySelector('.dia');
        const horas = document.querySelector('.hora');
        const minutos = document.querySelector('.minuto');
        const segundos = document.querySelector('.segundo');
        const e = document.getElementById("mensaje");
        dias.innerHTML=t.diasFaltantes;
        horas.innerHTML=t.horasFaltantes;
        minutos.innerHTML=t.minutosFaltantes;
        segundos.innerHTML=t.segundosFaltantes;
           

        mensaje = "Falta Para Navidad:"

        e.innerHTML = mensaje;
        if (t.tiempoFaltante <1) {
            clearInterval(tiempoActual);
            noelplay.classList.add ("act");
            noelpause.classList.add("act");
            noelStop.classList.add("on");
            mensaje="¡Feliz Navidad!"
            e.innerHTML = mensaje;

            dias.innerHTML=`00`;
            horas.innerHTML=`00`;
            minutos.innerHTML=`00`;
            segundos.innerHTML=`00`;

            if (noel == "off") {
                noel = "on"
                noelplay.addEventListener('click', ()=>{
                   
                    sonidoFondo.play();
                })
                noelpause.addEventListener('click', ()=>{
                    sonidoFondo.pause();
                })
            }
        }
               
    }, 1000);
}

cuentaRegresiva('November 21 2023 16:50 :00 GMT-0500', 'cuentaRegresiva', '¡Feliz Navidad!');