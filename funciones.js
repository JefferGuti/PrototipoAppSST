
//Codigo para hacer funcionar la camara del dispositivo para grabar evidencia de las actividades
'use strict';
document.getElementById('canvas').style.display = 'none';
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const constraints = {
    Audio: false,
    video: {
        width: 1280, heigth: 720
    }
};

async function init() {
    try {
        const stream = await
            navigator.mediaDevices.getUserMedia(constraints);
        handleSuccess(stream);
    } catch (e) {
        alert("Conceda permisos a la camara y refresque la pagina") //alerta de permisos
        $("#mensaje").html("seleccione un dispositivo para dar permisos a la camara y refresque el navegador. <br clear='all'><br clear='all'>");

    }
}

function handleSuccess(stream) {
    window.stream = stream;
    video.srcObject = stream;
}

init()
var context = canvas.getContext('2d');


