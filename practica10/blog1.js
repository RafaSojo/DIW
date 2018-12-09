function cargaContextoCanvas(idCanvas) {
    let elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
        let contexto = elemento.getContext('2d');
        if (contexto)
            return contexto;
    }
    return false;
}

function init() {
    let contexto = cargaContextoCanvas('logoAndroid');
    if (contexto) {

        android  = contexto;
        android.fillStyle="#a5ca39";
        android.beginPath();
        android.arc(180,145,90,0, Math.PI*1, true);
        android.closePath()
        android.fill();
        //Antenas
        
        
        //ojos
        android.fillStyle="#FFFFFF";
        android.beginPath();
        android.arc(130,110,9,0, Math.PI*2, true);
        android.closePath()
        android.fill();
        
        android.fillStyle="#FFFFFF";
        android.beginPath();
        android.arc(230,110,9,0, Math.PI*2, true);
        android.closePath()
        android.fill();
  
        //Antenas
        android.beginPath();
        android.lineCap = "round";
        android.moveTo(160,120);
        android.lineTo(100, 50);
        android.strokeStyle = "#a5ca39";
        android.lineWidth = 8;
        android.stroke();
        
        android.beginPath();
        android.lineCap = "round";
        android.moveTo(210,80);
        android.lineTo(240, 50);
        android.strokeStyle = "#a5ca39";
        android.lineWidth = 8;
        android.stroke();

    }
}

window.addEventListener('load',init);