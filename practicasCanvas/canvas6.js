function cargaContextoCanvas(idCanvas) {
    let elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
        let contexto = elemento.getContext('2d');
        if (contexto)
            return contexto;
    }
    return false;
}

window.onload = function () {
    let contexto = cargaContextoCanvas('miCanvas');
    if (contexto) {
        contexto.beginPath();
        contexto.arc(75,75,60,Math.PI,Math.PI*0.5,false);
        // contexto.fill();


        // contexto.beginPath();
        // contexto.fillStyle = "#0056AA";
        contexto.arc(75,75,40,Math.PI*0.5,Math.PI,false);
        contexto.fill();
        


        // contexto.moveTo(1, 1);
        
        contexto.beginPath();
        contexto.fillStyle = "#f48942";
        contexto.arc(75,75,15,0,Math.PI*2,false);

        // contexto.closePath();
        contexto.fill();

    }
}