function obtenerTiempoFaltante(fechalimite) {
    let ahora = new Date();
    tiempoFaltante = (new Date(fechalimite) - ahora + 1000) / 1000;
    segundoFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return{
        segundoFaltantes,
        minutosFaltantes,
        horasFaltantes,
        tiempoFaltante,
    }
};

//console.log(obtenerTiempoFaltante(´Dec 25 2023 00:00:00 GMT-0500´));
function cuentaRegresiva(tiempoFaltante,reloj,mensaje){
    const e = document.getElementById(reloj);

    const tiempoActual = setInterval(()=>{
        let t = obtenerTiempoFaltante(tiempoFaltante);
        e.innerHTML = `${t.diasFaltantes}d:${t.horasFaltantes}h:${t.minutosFaltantes}m:${t.segundoFaltantes}s`;

        if(t.tiempoFaltante <0) {
            clearInterval(tiempoActual);
            e.innerHTML = mensaje;
        }
    }, 1000)
};

cuentaRegresiva('Dec 25 2023 00:00:00 GMT-0500','cuentaRegresiva','¡Feliz Navidad!');