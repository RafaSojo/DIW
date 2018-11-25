function cargaContextoCanvas(idCanvas) {
    let elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
        let contexto = elemento.getContext('2d');
        if (contexto)
            return contexto;
    }
    return false;
}

function pinta(){
    let contexto = cargaContextoCanvas('miCanvas');
    if (contexto) {
        /*
        contexto.strokeStyle = "orange";
        contexto.lineWidth = 15;
        contexto.arc(0,150,120,0,2,false);
        contexto.stroke(); */

        contexto.arc(100,70,50,0,(Math.PI/180)*360,true);
        contexto.fillStyle = "red";
        contexto.fill();

        contexto.beginPath();

        contexto.arc(100,70,25,0,(Math.PI/180)*360,true);
        contexto.strokeStyle = "yellow";
        contexto.lineWidth = 15;
        contexto.stroke();

    }
}

window.onload = function () {
        
        pinta();
}