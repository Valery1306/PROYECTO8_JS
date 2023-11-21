const segundos=document.querySelector("#segundosFaltantes")
function obtenerTiempoFaltante(fechaLimite){
    let ahora=new Date();

    /* Guardara los milisegundos */
    let tiempoFaltante =(new Date(fechaLimite)-ahora+1000)/1000;

    /* Aproxime el número entero mas cercano y concatene el 0 */
    segundosFaltantes =("0"+Math.floor(tiempoFaltante % 60)).slice(-2);
    minutosFaltantes=("0"+Math.floor(tiempoFaltante / 60 %60)).slice(-2);
    horasFaltantes=("0"+Math.floor(tiempoFaltante /3600 %24)).slice(-2);
    diasFaltantes=("0"+Math.floor(tiempoFaltante /(3600*24))).slice(-2);

    return{
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    }
};

let papaNoel = document.getElementById("papaNoeloff")
let playBtn = document.getElementById('playBtn');
let pauseBtn = document.getElementById('pauseBtn');
playBtn.disabled=true;
pauseBtn.disabled=true;

function cuentaRegresiva(tiempoFaltante, reloj, mensaje){
    const e=document.getElementById(reloj);
  let d = document.getElementById("dia")
    let h=document.getElementById("hora")
    let m=document.getElementById("minuto")
    let s=document.getElementById("segundo")
  

    const tiempoActual =setInterval(()=>{
        let t =obtenerTiempoFaltante(tiempoFaltante);
        d.innerHTML=`${diasFaltantes}`
        h.innerHTML=`${horasFaltantes}`
        m.innerHTML=`${minutosFaltantes}`
        s.innerHTML=`${segundosFaltantes}`
        
      
        
     
        if(t.tiempoFaltante <1){
            clearInterval(tiempoActual);
            mensajito.innerHTML=mensaje;
            papaNoel.classList.add("on")
            d.innerHTML="00";
            h.innerHTML="00";
            m.innerHTML="00";
            s.innerHTML="00";
            playBtn.disabled=false;
            pauseBtn.disabled=false;
        }
        else{
            d.innerHTML=`${diasFaltantes}`
            h.innerHTML=`${horasFaltantes}`
            m.innerHTML=`${minutosFaltantes}`
            s.innerHTML=`${segundosFaltantes}`
        }

    },1000)
};

cuentaRegresiva("Nov 21 2023 17:48:00", 'cuentaRegresiva', 'Feliz Navidad')
let btnAudio = new Audio('./aud/allWant.mp3')

/* console.log(obtenerTiempoFaltante('Dec 25 2023 00:00:00 GMT-0500')); */

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('audio');
    var playBtn = document.getElementById('playBtn');
    var pauseBtn = document.getElementById('pauseBtn');


    function play() {

        audio.play();
    }

    function pause() {
        audio.pause();
    }

    playBtn.addEventListener('click', play);
    pauseBtn.addEventListener('click', pause);
});

function song(audio){
    if (audio ===1){
        btnAudio .play();
    }
    else{
        btnAudio.pause();
    }
}